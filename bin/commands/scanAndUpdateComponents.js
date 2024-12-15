import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';
import { fetchFile } from '../utils/fetchFile.js';

const COMPONENTS_DIR = path.resolve('./src/lib/components/ui');
const GITHUB_BASE_URL =
	'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib';

export async function scanAndUpdateComponents() {
	try {
		// Check if the components directory exists
		await fs.access(COMPONENTS_DIR).catch(() => {
			throw new Error('No components directory found.');
		});

		// Read the list of installed components
		const components = await fs.readdir(COMPONENTS_DIR);
		if (components.length === 0) {
			console.log('No components installed to update.');
			return;
		}

		// Ask the user for confirmation
		const response = await prompts({
			type: 'confirm',
			name: 'value',
			message: `Found ${components.length} components. Do you want to update them?`,
			initial: false
		});

		if (!response.value) {
			console.log('Update cancelled.');
			return;
		}

		// Check project set up
		await checkSvelteKitApp();
		await checkOrInstallTailwindCSS();
		await checkOrInstallTailwindMerge();

		// Update each component
		for (const component of components) {
			const componentName = path.basename(component, '.svelte');
			const fileUrl = `${GITHUB_BASE_URL}/${componentName}.svelte`;
			const destPath = path.join(COMPONENTS_DIR, component);

			try {
				await fetchFile(fileUrl, destPath);
				console.log(`✅ Updated "${componentName}" successfully.`);
			} catch (err) {
				console.error(`❌ Failed to update "${componentName}": ${err.message}`);
			}
		}
	} catch (err) {
		console.error(`❌ Error: ${err.message}`);
	}
}
