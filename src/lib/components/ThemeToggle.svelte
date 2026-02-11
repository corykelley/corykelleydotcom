<script lang="ts">
	import { toggleTheme, isDark } from '$lib/stores/theme.svelte';
</script>

<button
	onclick={toggleTheme}
	class="relative flex h-9 w-9 items-center justify-center rounded-lg
		text-muted transition-colors hover:bg-surface hover:text-foreground
		focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
	aria-label={isDark() ? 'Switch to light mode' : 'Switch to dark mode'}
>
	<!-- Sun icon -->
	<svg
		class="h-5 w-5 rotate-0 scale-100 transition-transform dark:rotate-90 dark:scale-0"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="m4.93 4.93 1.41 1.41" />
		<path d="m17.66 17.66 1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="m6.34 17.66-1.41 1.41" />
		<path d="m19.07 4.93-1.41 1.41" />
	</svg>

	<!-- Moon icon -->
	<svg
		class="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
</button>
