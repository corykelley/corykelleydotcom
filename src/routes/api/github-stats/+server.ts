import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

const GITHUB_GRAPHQL = 'https://api.github.com/graphql';

const QUERY = `
query($username: String!) {
  user(login: $username) {
    starredRepos: repositories(first: 100, ownerAffiliations: OWNER, orderBy: { field: STARGAZERS, direction: DESC }) {
      totalCount
      nodes {
        stargazerCount
      }
    }
    recentRepos: repositories(first: 4, ownerAffiliations: OWNER, privacy: PUBLIC, orderBy: { field: PUSHED_AT, direction: DESC }) {
      nodes {
        name
        url
        description
        pushedAt
        stargazerCount
        primaryLanguage {
          name
          color
        }
      }
    }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
    }
    followers {
      totalCount
    }
  }
}
`;

interface GitHubResponse {
	data: {
		user: {
			starredRepos: {
				totalCount: number;
				nodes: Array<{ stargazerCount: number }>;
			};
			recentRepos: {
				nodes: Array<{
					name: string;
					url: string;
					description: string | null;
					pushedAt: string;
					stargazerCount: number;
					primaryLanguage: {
						name: string;
						color: string;
					} | null;
				}>;
			};
			contributionsCollection: {
				totalCommitContributions: number;
				totalPullRequestContributions: number;
				totalPullRequestReviewContributions: number;
			};
			followers: {
				totalCount: number;
			};
		};
	};
}

export const GET: RequestHandler = async () => {
	const token = env.GITHUB_TOKEN;
	const username = env.GITHUB_USERNAME || 'corykelley';

	if (!token) {
		return json(
			{
				stars: 0,
				commits: 0,
				prs: 0,
				reviews: 0,
				repos: 0,
				followers: 0,
				recentRepos: []
			},
			{
				headers: {
					'Cache-Control': 'public, max-age=60'
				}
			}
		);
	}

	try {
		const response = await fetch(GITHUB_GRAPHQL, {
			method: 'POST',
			headers: {
				Authorization: `bearer ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: QUERY,
				variables: { username }
			})
		});

		if (!response.ok) {
			throw new Error(`GitHub API returned ${response.status}`);
		}

		const result: GitHubResponse = await response.json();
		const user = result.data.user;

		const totalStars = user.starredRepos.nodes.reduce(
			(sum, repo) => sum + repo.stargazerCount,
			0
		);

		const recentRepos = user.recentRepos.nodes.map((repo) => ({
			name: repo.name,
			url: repo.url,
			description: repo.description,
			pushedAt: repo.pushedAt,
			stars: repo.stargazerCount,
			language: repo.primaryLanguage?.name ?? null,
			languageColor: repo.primaryLanguage?.color ?? null
		}));

		return json(
			{
				stars: totalStars,
				commits: user.contributionsCollection.totalCommitContributions,
				prs: user.contributionsCollection.totalPullRequestContributions,
				reviews: user.contributionsCollection.totalPullRequestReviewContributions,
				repos: user.starredRepos.totalCount,
				followers: user.followers.totalCount,
				recentRepos
			},
			{
				headers: {
					'Cache-Control': 'public, s-maxage=3600, max-age=300'
				}
			}
		);
	} catch (err) {
		console.error('GitHub API error:', err);
		return json(
			{ error: 'Failed to fetch GitHub stats' },
			{ status: 502, headers: { 'Cache-Control': 'no-cache' } }
		);
	}
};
