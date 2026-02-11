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

		<!-- Image + Narrative -->
		<div class="flex flex-col gap-10 md:flex-row md:gap-12">
			<div
				class="fade-in shrink-0 md:w-72"
				use:inview={{ delay: 150 }}
			>
				<img
					src="/me.jpeg"
					alt="Cory Kelley"
					class="w-full rounded-2xl border border-border object-cover"
				/>
			</div>

			<div class="fade-in space-y-6 leading-relaxed text-muted" use:inview={{ delay: 200 }}>
				<p>
					I've spent the better part of a decade deep in the weeds of web development. These days
					I lead from the front as a Senior Technical Lead Developer — still writing code every day,
					but also <span class="text-foreground">setting technical direction, unblocking teams, and
					making sure the right things get built the right way</span>.
				</p>

				<p>
					Most of my work lives in the <span class="text-foreground">Shopify Plus</span> ecosystem,
					where I build custom themes, apps, and storefront experiences for enterprise and high-profile
					brands. I've had the chance to partner with companies like
					<span class="text-foreground">Caldera+Lab, Title Boxing, Singer Sewing, evo, and ButcherBox</span> —
					projects where performance, polish, and scalability actually matter.
				</p>

				<p>
					Outside of work, I'm a dad to <span class="text-foreground">twin boys</span>, a husband
					to an amazing wife, and an avid <span class="text-foreground">Notre Dame football</span>
					fan. Go Irish!
				</p>
			</div>
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
					{ label: 'Shopify & Liquid', detail: 'Theme builds, custom storefronts, app development' },
					{ label: 'Technical Leadership', detail: 'Code reviews, mentorship, architecture decisions' },
					{ label: 'Tailwind CSS', detail: 'Design systems, utility-first architecture, theming' },
					{ label: 'JavaScript (ES6+)', detail: 'Vanilla JS, DOM APIs, browser performance' },
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
			<div class="flex flex-col items-center gap-4">
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
	</div>
</section>
