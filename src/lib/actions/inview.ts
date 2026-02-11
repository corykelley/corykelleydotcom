/**
 * Svelte action that adds the `in-view` class when an element
 * scrolls into the viewport. Pairs with `.fade-in` / `.scale-in` CSS classes.
 */
export function inview(
	node: HTMLElement,
	params: { threshold?: number; delay?: number } = {}
) {
	// Respect reduced-motion preference
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('in-view');
		return { destroy() {} };
	}

	if (params.delay) {
		node.style.setProperty('--delay', `${params.delay}ms`);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: params.threshold ?? 0.15 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
