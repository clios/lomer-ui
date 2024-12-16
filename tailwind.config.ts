import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				oxygen: ['Oxygen', 'sans-serif'] // Add Oxygen font
			}
		}
	},
	plugins: [],
	darkMode: 'selector'
} satisfies Config;
