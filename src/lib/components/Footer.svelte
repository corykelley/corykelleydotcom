<script lang="ts">
	import { siteConfig } from '$lib/config';
	import SocialLinks from './SocialLinks.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<footer class="border-t border-border">
	<div class="mx-auto max-w-5xl px-6 py-16">
		<div class="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
			<!-- Left: name + tagline -->
			<div class="text-center sm:text-left">
				<a href="/" class="text-lg font-semibold text-foreground transition-colors hover:text-accent">
					{siteConfig.name}
				</a>
				<p class="mt-1 text-sm text-muted">Building quality software.</p>
			</div>

			<!-- Center: nav links -->
			<div class="flex items-center gap-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-sm text-muted transition-colors hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Right: social -->
			<div class="flex items-center gap-2">
				<SocialLinks />
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="mt-8 border-t border-border pt-6 text-center">
			<p class="text-xs text-muted">
				&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
