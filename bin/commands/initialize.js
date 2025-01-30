import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';
import { addMultipleComponents } from './addMultipleComponents.js';

export async function initialize() {
	await checkSvelteKitApp();
	await checkOrInstallTailwindCSS();
	await checkOrInstallTailwindMerge();

	// Ask the user where TailwindCSS is imported
	const { cssFilePath } = await prompts({
		type: 'text',
		name: 'cssFilePath',
		message: 'Where is TailwindCSS imported? (./src/app.css)',
		initial: './src/app.css'
	});

	try {
		// Read the CSS file
		const cssFileContent = await fs.readFile(cssFilePath, 'utf8');

		// Check if the import already exists
		if (cssFileContent.includes("@import './lib/components/ui/lomer.css'")) {
			console.log('✅ The lomer.css import is already present.');
			return;
		}

		// Find the line with "@import 'tailwindcss'"
		const updatedContent = cssFileContent.replace(
			/@import\s+['"]tailwindcss['"]\s*;/,
			(match) => `${match}\n@import './lib/components/ui/lomer.css';`
		);

		// Write back the updated content to the CSS file
		await fs.writeFile(cssFilePath, updatedContent, 'utf8');
		console.log(
			`✅ Added "@import './lib/components/ui/lomer.css'" to ${cssFilePath}.`
		);

		// Create the lomer.css file
		const lomerCssPath = path.resolve('./src/lib/components/ui/lomer.css');
		const lomerCssContent = `@variant dark (&:where(.dark, .dark *));

@theme {
    --color-bg: var(--color-zinc-50);
    --color-fg: var(--color-zinc-950);

    --color-primary: var(--color-cyan-600);
    --color-primary-fg: var(--color-zinc-50);

    --color-secondary: var(--color-zinc-200);
    --color-secondary-fg: var(--color-zinc-950);

    --color-destructive: var(--color-red-500);
    --color-destructive-fg: var(--color-zinc-50);

    --color-muted: var(--color-zinc-600);
    --color-muted-fg: var(--color-zinc-400);

    --color-disabled: var(--color-zinc-500);
    --color-disabled-fg: var(--color-zinc-800);

    --color-input: var(--color-zinc-50);
    --color-input-fg: var(--color-zinc-950);

    --color-card: var(--color-zinc-200);
    --color-card-fg: var(--color-zinc-950);

    --color-popup: var(--color-white);
    --color-popup-fg: var(--color-zinc-950);

    --color-border: var(--color-zinc-300);

    --color-spinner: var(--color-cyan-500);

    --radius: 0.25rem;
    --radius-card: calc(var(--radius) * 1.5);
}

.dark {
    --color-bg: var(--color-zinc-950);
    --color-fg: var(--color-zinc-50);

    --color-primary: var(--color-cyan-500);
    --color-primary-fg: var(--color-zinc-50);

    --color-secondary: var(--color-zinc-800);
    --color-secondary-fg: var(--color-zinc-50);

    --color-destructive: var(--color-red-500);
    --color-destructive-fg: var(--color-zinc-50);

    --color-muted: var(--color-zinc-400);
    --color-muted-fg: var(--color-zinc-600);

    --color-disabled: var(--color-zinc-600);
    --color-disabled-fg: var(--color-zinc-400);

    --color-input: var(--color-zinc-950);
    --color-input-fg: var(--color-zinc-50);

    --color-card: var(--color-zinc-900);
    --color-card-fg: var(--color-zinc-50);

    --color-popup: var(--color-zinc-950);
    --color-popup-fg: var(--color-zinc-50);

    --color-border: var(--color-zinc-700);

    --color-spinner: var(--color-cyan-400);
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply bg-bg text-fg;
    }
    ::selection {
        background-color: var(--color-primary) !important;
        color: var(--color-primary-fg) !important;
    }
}`;

		await fs.mkdir(path.dirname(lomerCssPath), { recursive: true });
		await fs.writeFile(lomerCssPath, lomerCssContent, 'utf8');
		console.log(`✅ Created "${lomerCssPath}".`);

		addMultipleComponents();
	} catch (err) {
		console.error(`❌ Error initializing: ${err.message}`);
	}
}
