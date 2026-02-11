<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/config';
	import ThemeToggle from './ThemeToggle.svelte';
	import SocialLinks from './SocialLinks.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' }
	];

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300
		{scrolled ? 'border-b border-border bg-base/80 backdrop-blur-xl' : 'bg-transparent'}"
>
	<nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
		<!-- Logo -->
		<a
			href="/"
			class="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
		>
			{siteConfig.name}
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="rounded-lg px-3 py-2 text-sm font-medium transition-colors
						{isActive(link.href)
						? 'text-foreground'
						: 'text-muted hover:bg-surface hover:text-foreground'}"
				>
					{link.label}
				</a>
			{/each}

			<div class="mx-2 h-5 w-px bg-border"></div>

			<SocialLinks class="hidden lg:flex" />
			<ThemeToggle />
		</div>

		<!-- Mobile controls -->
		<div class="flex items-center gap-1 md:hidden">
			<ThemeToggle />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			>
				{#if mobileOpen}
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				{:else}
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 12h16" />
						<path d="M4 6h16" />
						<path d="M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-border bg-base/95 backdrop-blur-xl md:hidden">
			<div class="flex flex-col gap-1 px-6 py-4">
				{#each links as link}
					<a
						href={link.href}
						onclick={closeMobile}
						class="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
							{isActive(link.href)
							? 'bg-surface text-foreground'
							: 'text-muted hover:bg-surface hover:text-foreground'}"
					>
						{link.label}
					</a>
				{/each}
				<div class="my-2 h-px bg-border"></div>
				<SocialLinks class="px-1" />
			</div>
		</div>
	{/if}
</header>
