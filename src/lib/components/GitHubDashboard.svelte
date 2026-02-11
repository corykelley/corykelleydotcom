<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { inview } from '$lib/actions/inview';

	interface GitHubStats {
		stars: number;
		commits: number;
		prs: number;
		reviews: number;
		repos: number;
		followers: number;
		recentRepos: Array<{
			name: string;
			url: string;
			description: string | null;
			pushedAt: string;
			stars: number;
			language: string | null;
			languageColor: string | null;
		}>;
	}

	let stats = $state<GitHubStats | null>(null);
	let error = $state(false);
	let loading = $state(true);
	let hasAnimated = $state(false);

	let display = $state({
		stars: 0,
		commits: 0,
		prs: 0,
		reviews: 0,
		repos: 0,
		followers: 0
	});

	type StatKey = keyof typeof display;

	const statItems: Array<{ key: StatKey; label: string; icon: () => void }> = [
		{ key: 'commits', label: 'Commits', icon: gitCommitIcon },
		{ key: 'prs', label: 'Pull Requests', icon: gitPrIcon },
		{ key: 'reviews', label: 'PR Reviews', icon: eyeIcon },
		{ key: 'stars', label: 'Stars Earned', icon: starIcon },
		{ key: 'repos', label: 'Repositories', icon: repoIcon },
		{ key: 'followers', label: 'Followers', icon: usersIcon }
	];

	onMount(async () => {
		try {
			const res = await fetch('/api/github-stats');
			if (!res.ok) throw new Error('Failed to fetch');
			stats = await res.json();
		} catch {
			error = true;
		} finally {
			loading = false;
		}
	});

	function animateValue(key: StatKey, target: number, duration: number) {
		const start = performance.now();

		function tick() {
			const elapsed = performance.now() - start;
			const progress = Math.min(elapsed / duration, 1);
			display[key] = target * cubicOut(progress);

			if (progress < 1) {
				requestAnimationFrame(tick);
			} else {
				display[key] = target;
			}
		}

		requestAnimationFrame(tick);
	}

	function animateCounters() {
		if (hasAnimated || !stats) return;
		hasAnimated = true;
		animateValue('stars', stats.stars, 2000);
		animateValue('commits', stats.commits, 2200);
		animateValue('prs', stats.prs, 1800);
		animateValue('reviews', stats.reviews, 2000);
		animateValue('repos', stats.repos, 1600);
		animateValue('followers', stats.followers, 1800);
	}

	function handleInView(node: HTMLElement) {
		const action = inview(node, { threshold: 0.2 });

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					animateCounters();
					observer.unobserve(node);
				}
			},
			{ threshold: 0.2 }
		);
		observer.observe(node);

		return {
			destroy() {
				action.destroy();
				observer.unobserve(node);
			}
		};
	}

	function formatNumber(n: number): string {
		if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
		return Math.round(n).toLocaleString();
	}

	function timeAgo(dateStr: string): string {
		const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
		if (seconds < 60) return 'just now';
		const minutes = Math.floor(seconds / 60);
		if (minutes < 60) return `${minutes}m ago`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${hours}h ago`;
		const days = Math.floor(hours / 24);
		if (days < 7) return `${days}d ago`;
		if (days < 30) return `${Math.floor(days / 7)}w ago`;
		const months = Math.floor(days / 30);
		return `${months}mo ago`;
	}
</script>

<!-- Icon snippets -->
{#snippet gitCommitIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="12" cy="12" r="4" /><path d="M12 2v6" /><path d="M12 16v6" />
	</svg>
{/snippet}

{#snippet gitPrIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 9v12" /><path
			d="M18 9a9 9 0 0 0-9 9"
		/>
	</svg>
{/snippet}

{#snippet eyeIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
	</svg>
{/snippet}

{#snippet starIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<polygon
			points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
		/>
	</svg>
{/snippet}

{#snippet repoIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
		/>
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
{/snippet}

{#snippet usersIcon()}
	<svg
		class="h-5 w-5"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path
			d="M22 21v-2a4 4 0 0 0-3-3.87"
		/><path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
{/snippet}

<div use:handleInView class="fade-in">
	{#if loading}
		<!-- Skeleton loading state -->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each Array(6) as _}
				<div class="rounded-xl border border-border bg-surface p-6 animate-pulse">
					<div class="h-5 w-5 rounded bg-border mb-3"></div>
					<div class="h-8 w-16 rounded bg-border mb-2"></div>
					<div class="h-4 w-20 rounded bg-border"></div>
				</div>
			{/each}
		</div>
	{:else if error}
		<div class="rounded-xl border border-border bg-surface p-8 text-center">
			<p class="text-muted">Unable to load GitHub stats right now.</p>
			<p class="mt-1 text-sm text-muted">
				Check back later or visit my
				<a
					href="https://github.com/corykelley"
					class="text-accent hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub profile
				</a>
				directly.
			</p>
		</div>
	{:else if stats}
		<!-- Stat counters -->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each statItems as item, i}
				<div
					class="scale-in rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/30"
					style="--delay: {i * 100}ms"
					use:inview={{ delay: i * 100 }}
				>
					<div class="mb-3 text-accent">
						{@render item.icon()}
					</div>
					<p class="text-2xl font-bold tabular-nums text-foreground md:text-3xl">
						{formatNumber(display[item.key])}
					</p>
					<p class="mt-1 text-sm text-muted">{item.label}</p>
				</div>
			{/each}
		</div>

		<!-- What I'm working on -->
		{#if stats.recentRepos.length > 0}
			<div class="mt-16">
				<h3 class="fade-in mb-6 text-xl font-semibold text-foreground" use:inview>
					What I'm <i>publically</i> working on
				</h3>
				<div class="grid gap-4 md:grid-cols-2">
					{#each stats.recentRepos as repo, i}
						<a
							href={repo.url}
							target="_blank"
							rel="noopener noreferrer"
							class="fade-in group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
							style="--delay: {i * 100}ms"
							use:inview={{ delay: i * 100 }}
						>
							<div class="flex items-start justify-between">
								<h4
									class="font-mono text-sm font-semibold text-foreground group-hover:text-accent transition-colors"
								>
									{repo.name}
								</h4>
								<span class="shrink-0 ml-3 text-xs text-muted">
									{timeAgo(repo.pushedAt)}
								</span>
							</div>
							{#if repo.description}
								<p class="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
									{repo.description}
								</p>
							{/if}
							<div class="mt-3 flex items-center gap-3">
								{#if repo.language}
									<div class="flex items-center gap-1.5">
										<span
											class="h-2.5 w-2.5 rounded-full"
											style="background-color: {repo.languageColor || '#6b7280'}"
										></span>
										<span class="text-xs text-muted">{repo.language}</span>
									</div>
								{/if}
								{#if repo.stars > 0}
									<span class="flex items-center gap-1 text-xs text-muted">
										<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
											<polygon
												points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
											/>
										</svg>
										{repo.stars}
									</span>
								{/if}
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>
