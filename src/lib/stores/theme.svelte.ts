import { browser } from '$app/environment';

type ThemeMode = 'light' | 'dark' | 'system';

let mode = $state<ThemeMode>('system');
let systemPref = $state<'light' | 'dark'>('light');

function getResolved(): 'light' | 'dark' {
	return mode === 'system' ? systemPref : mode;
}

function apply() {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', getResolved() === 'dark');
}

export function initTheme() {
	if (!browser) return;

	const stored = localStorage.getItem('theme') as ThemeMode | null;
	if (stored === 'light' || stored === 'dark') {
		mode = stored;
	}

	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	systemPref = mq.matches ? 'dark' : 'light';

	mq.addEventListener('change', (e) => {
		systemPref = e.matches ? 'dark' : 'light';
		if (mode === 'system') apply();
	});

	apply();
}

export function toggleTheme() {
	if (!browser) return;
	const next = getResolved() === 'dark' ? 'light' : 'dark';
	mode = next;
	localStorage.setItem('theme', next);
	apply();
}

export function isDark(): boolean {
	return getResolved() === 'dark';
}

export function currentMode(): ThemeMode {
	return mode;
}
