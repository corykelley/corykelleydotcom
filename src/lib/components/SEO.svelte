<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/config';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
	}

	let { title, description, image }: Props = $props();

	let pageTitle = $derived(title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.title}`);
	let pageDescription = $derived(description || siteConfig.description);
	let pageImage = $derived(image || `${siteConfig.url}/og-image.png`);
	let canonicalUrl = $derived(`${siteConfig.url}${page.url.pathname}`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={pageImage} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteConfig.name} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={pageImage} />
</svelte:head>
