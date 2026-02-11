<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Blog" description="Thoughts on front-end development, Shopify, technical leadership, and building great software." />

<section class="py-24 px-6">
	<div class="mx-auto max-w-3xl">
		<!-- Title -->
		<p
			class="fade-in mb-4 font-mono text-sm tracking-wider text-accent uppercase"
			use:inview
		>
			Blog
		</p>
		<h1
			class="fade-in mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
			use:inview={{ delay: 100 }}
		>
			Writing & thoughts
		</h1>

		<!-- Coming soon state -->
		<div
			class="fade-in mt-16 flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-8 py-16 text-center"
			use:inview={{ delay: 200 }}
		>
			<!-- Pencil icon -->
			<div class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
					<path d="m15 5 4 4" />
				</svg>
			</div>

			<h2 class="mb-3 text-xl font-semibold text-foreground">Coming soon</h2>
			<p class="max-w-md text-muted leading-relaxed">
				I'm working on some posts about front-end architecture, Shopify development,
				and lessons from nearly a decade of building for the web. Stay tuned.
			</p>
		</div>
	</div>
</section>
