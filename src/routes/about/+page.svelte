<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { siteConfig } from '$lib/config';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="About" description="Learn more about Cory Kelley — a senior technical lead specializing in front-end architecture, Shopify development, and engineering leadership." />

<section class="py-24 px-6">
	<div class="mx-auto max-w-3xl">
		<!-- Title -->
		<p
			class="fade-in mb-4 font-mono text-sm tracking-wider text-accent uppercase"
			use:inview
		>
			About
		</p>
		<h1
			class="fade-in mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
			use:inview={{ delay: 100 }}
		>
			A bit about me
		</h1>

		<!-- Narrative -->
		<div class="fade-in space-y-6 leading-relaxed text-muted" use:inview={{ delay: 200 }}>
			<p>
				I'm a senior technical lead with close to a decade of experience building for the web.
				My primary focus is front-end development — <span class="text-foreground">React, TypeScript, and
				modern CSS architectures</span> — but I'm equally at home across the full stack.
			</p>

			<p>
				I specialize in <span class="text-foreground">Shopify development</span>, where I've built
				and shipped custom themes, complex Liquid architectures, and high-performance storefronts.
				<span class="text-foreground">Tailwind CSS</span> is my styling tool of choice, and I've
				used it extensively to build design systems and component libraries at scale.
			</p>

			<p>
				Beyond code, I care deeply about <span class="text-foreground">technical mentorship,
				engineering culture, and building products</span> that genuinely serve their users.
				I believe the best software comes from teams that communicate well, move with intention,
				and hold themselves to a high standard of craft.
			</p>
		</div>

		<!-- Focus areas -->
		<div class="mt-16">
			<h2
				class="fade-in mb-8 text-2xl font-bold text-foreground"
				use:inview
			>
				What I focus on
			</h2>

			<div class="grid gap-4 sm:grid-cols-2">
				{#each [
					{ label: 'React & TypeScript', detail: 'Component architecture, state management, performance' },
					{ label: 'Shopify & Liquid', detail: 'Theme builds, custom storefronts, section architecture' },
					{ label: 'Tailwind CSS', detail: 'Design systems, utility-first architecture, theming' },
					{ label: 'JavaScript (ES6+)', detail: 'Vanilla JS, DOM APIs, browser performance' },
					{ label: 'Technical Leadership', detail: 'Code reviews, mentorship, architecture decisions' },
					{ label: 'Full Stack', detail: 'Node.js, APIs, databases, deployment pipelines' }
				] as area, i}
					<div
						class="fade-in rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/30"
						use:inview={{ delay: i * 100 }}
					>
						<h3 class="font-semibold text-foreground">{area.label}</h3>
						<p class="mt-1 text-sm text-muted">{area.detail}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="fade-in mt-16 rounded-2xl border border-border bg-surface p-8 text-center" use:inview>
			<h2 class="mb-3 text-xl font-bold text-foreground">Want to work together?</h2>
			<p class="mb-6 text-muted">
				I'm always open to interesting conversations and new opportunities.
			</p>
			<SocialLinks class="justify-center" iconSize="h-6 w-6" />
		</div>
	</div>
</section>
