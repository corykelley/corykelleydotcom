<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { inview } from '$lib/actions/inview';
	import GitHubDashboard from '$lib/components/GitHubDashboard.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />

<!-- ══════════════════════ HERO ══════════════════════ -->
<section class="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
	<!-- Warm gradient background -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background: linear-gradient(180deg, #1f1209 0%, #1a1207 30%, var(--c-base) 100%);"
	></div>

	<!-- Orange accent glow -->
	<div
		class="pointer-events-none absolute inset-0 opacity-20"
		style="background: radial-gradient(ellipse at 50% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 60%);"
	></div>

	<div class="relative z-10 mx-auto max-w-5xl px-6 w-full">
		<p class="fade-in mb-4 font-mono text-sm tracking-wider uppercase text-accent" use:inview>
			Senior Technical Lead Developer
		</p>

		<h1
			class="fade-in text-5xl font-bold tracking-tight text-white md:text-7xl"
			use:inview={{ delay: 100 }}
		>
			{siteConfig.name}
		</h1>

		<p
			class="fade-in mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
			use:inview={{ delay: 200 }}
		>
			Hands-on technical lead with close to 10 years of experience building
			high-performance web and Shopify Plus solutions for enterprise clients.
			Setting technical direction, unblocking teams, and owning complex builds
			from discovery through launch.
		</p>

		<div class="fade-in mt-8 flex flex-wrap items-center gap-4" use:inview={{ delay: 300 }}>
			<a
				href="/about"
				class="inline-flex items-center rounded-xl bg-accent px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				About me
			</a>
			<a
				href={siteConfig.social.github}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
				GitHub
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2">
		<div class="fade-in flex flex-col items-center gap-2 text-white/50" use:inview={{ delay: 600 }}>
			<span class="text-xs tracking-wider uppercase">Scroll</span>
			<div class="h-8 w-px animate-pulse bg-white/20"></div>
		</div>
	</div>
</section>

<!-- ══════════════════════ WHAT I DO ══════════════════════ -->
<section class="py-24 px-6">
	<div class="mx-auto max-w-5xl">
		<h2 class="fade-in mb-4 text-center text-3xl font-bold text-foreground md:text-4xl" use:inview>
			What I Do
		</h2>
		<p class="fade-in mx-auto mb-16 max-w-xl text-center text-muted" use:inview={{ delay: 100 }}>
			Focused on outcomes, not just output.
		</p>

		<div class="grid gap-6 md:grid-cols-3">
			{#each [{ title: 'Frontend Architecture', description: 'Designing scalable, maintainable systems that teams can build on confidently. React, TypeScript, and modern CSS at production scale.', icon: 'layers' }, { title: 'Shopify & Commerce', description: 'Deep Liquid, theme, and storefront expertise that drives real business outcomes. Custom builds, performance tuning, and merchant empowerment.', icon: 'store' }, { title: 'Technical Leadership', description: 'Bridging the gap between product vision and engineering execution. Code review culture, mentorship, and shipping with intention.', icon: 'compass' }] as card, i}
				<div
					class="fade-in group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
					use:inview={{ delay: i * 150 }}
				>
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
					>
						{#if card.icon === 'layers'}
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
									d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
								/>
								<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
								<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
							</svg>
						{:else if card.icon === 'store'}
							<svg
								class="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
								<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
								<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
								<path d="M2 7h20" />
								<path
									d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
								/>
							</svg>
						{:else}
							<svg
								class="h-5 w-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
							</svg>
						{/if}
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">{card.title}</h3>
					<p class="leading-relaxed text-muted text-sm">{card.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ══════════════════════ HOW I WORK ══════════════════════ -->
<section class="bg-surface py-24 px-6">
	<div class="mx-auto max-w-4xl">
		<h2 class="fade-in mb-4 text-center text-3xl font-bold text-foreground md:text-4xl" use:inview>
			How I Work
		</h2>
		<p class="fade-in mx-auto mb-16 max-w-xl text-center text-muted" use:inview={{ delay: 100 }}>
			Principles that guide every decision.
		</p>

		<div class="space-y-12">
			{#each [{ number: '01', title: 'Ship with intention', description: 'Every line of code should earn its place. I build for clarity, performance, and longevity — not just to close a ticket.' }, { number: '02', title: 'Code is communication', description: 'Clean code is a conversation with your future self and your team. Readability beats cleverness, and consistency compounds.' }, { number: '03', title: 'Lead by building', description: 'The best technical leadership comes from staying close to the code while empowering others to grow. Strong opinions, loosely held.' }, { number: '04', title: 'Embrace change', description: 'The best developers lean into what\'s next instead of fighting it. AI, new frameworks, shifting paradigms — adapt early, learn fast, and let go of what no longer serves you.' }] as principle, i}
				<div class="fade-in flex gap-6" use:inview={{ delay: i * 150 }}>
					<span class="shrink-0 font-mono text-3xl font-bold text-accent/30 md:text-4xl">
						{principle.number}
					</span>
					<div>
						<h3 class="mb-2 text-xl font-semibold text-foreground">{principle.title}</h3>
						<p class="leading-relaxed text-muted">{principle.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ══════════════════════ GITHUB DASHBOARD ══════════════════════ -->
<section class="py-24 px-6">
	<div class="mx-auto max-w-5xl">
		<h2 class="fade-in mb-4 text-center text-3xl font-bold text-foreground md:text-4xl" use:inview>
			Open Source
		</h2>
		<p class="fade-in mx-auto mb-16 max-w-xl text-center text-muted" use:inview={{ delay: 100 }}>
			Contributions and community involvement.
		</p>

		<GitHubDashboard />
	</div>
</section>

<!-- ══════════════════════ CTA ══════════════════════ -->
<section class="bg-surface py-24 px-6">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="fade-in mb-6 text-3xl font-bold text-foreground md:text-4xl" use:inview>
			Let's Connect
		</h2>
		<p class="fade-in mb-8 text-muted leading-relaxed" use:inview={{ delay: 100 }}>
			Whether you're looking for a technical partner, need guidance on Shopify development, or just
			want to talk shop — I'd love to hear from you.
		</p>
		<div class="fade-in flex flex-col items-center gap-4" use:inview={{ delay: 200 }}>
			<a
				href="mailto:john.cory.kelley@gmail.com"
				class="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect width="20" height="16" x="2" y="4" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
				john.cory.kelley@gmail.com
			</a>
			<SocialLinks class="justify-center" iconSize="h-6 w-6" />
		</div>
	</div>
</section>
