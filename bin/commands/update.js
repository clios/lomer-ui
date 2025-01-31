import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';
import { fetchFile } from '../utils/fetchFile.js';

const COMPONENTS_DIR = path.resolve('./src/lib/components/ui');
const GITHUB_BASE_URL =
	'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/components/ui';

export async function update() {
	// Ensure the components directory exists
	try {
		await fs.access(COMPONENTS_DIR);
	} catch {
		console.log('❌ No components directory found.');
		return;
	}

	// Get installed .svelte components
	let components = await fs.readdir(COMPONENTS_DIR);
	components = components
		.filter((file) => file.endsWith('.svelte'))
		.map((file) => file.replace('.svelte', ''));

	if (components.length === 0) {
		console.log('❌ No installed components found to update.');
		return;
	}

	// Confirm update action
	const { confirmUpdate } = await prompts({
		type: 'confirm',
		name: 'confirmUpdate',
		message: `Found ${components.length} components. Do you want to update them?\nThis will replace your components with the latest versions.`,
		initial: false
	});

	if (!confirmUpdate) {
		console.log('❌ Update cancelled.');
		return;
	}

	// Ensure project dependencies are installed
	await checkSvelteKitApp();
	await checkOrInstallTailwindCSS();
	await checkOrInstallTailwindMerge();

	// Update each component
	for (const component of components) {
		const srcPath = `${GITHUB_BASE_URL}/${component}.svelte`;
		const destPath = path.join(COMPONENTS_DIR, `${component}.svelte`);

		try {
			await fetchFile(srcPath, destPath);
			console.log(`✅ "${component}" updated successfully.`);
		} catch (err) {
			console.error(`❌ Failed to update "${component}": ${err.message}`);
		}
	}
}
