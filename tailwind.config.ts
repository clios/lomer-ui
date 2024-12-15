import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: { extend: {} },
	plugins: [],
	darkMode: 'selector'
} satisfies Config;
