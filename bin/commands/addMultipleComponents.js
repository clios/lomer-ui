import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';
import { fetchFile } from '../utils/fetchFile.js';

const GITHUB_BASE_URL =
	'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib';
const DEST_DIR = path.resolve('./src/lib/components/ui');
const COMPONENTS = [
	'accordion',
	'alert',
	'button',
	'card-picker',
	'checkbox',
	'dialog',
	'drawer',
	'field',
	'input',
	'link',
	'radio',
	'select',
	'switch',
	'textarea'
];

export async function addMultipleComponents() {
	try {
		await checkSvelteKitApp();

		const { selectedComponents } = await prompts({
			type: 'multiselect',
			name: 'selectedComponents',
			message: 'Select components to add:',
			choices: COMPONENTS.map((component) => ({
				title: component,
				value: component
			})),
			hint: 'Use space to select, enter to confirm'
		});

		if (!selectedComponents || selectedComponents.length === 0) {
			console.log('❌ No components selected.');
			return;
		}

		await checkOrInstallTailwindCSS();
		await checkOrInstallTailwindMerge();

		await fs.mkdir(DEST_DIR, { recursive: true });

		for (const componentName of selectedComponents) {
			const fileUrl = `${GITHUB_BASE_URL}/${componentName}.svelte`;
			const destPath = path.join(DEST_DIR, `${componentName}.svelte`);

			try {
				// Check if the component already exists
				try {
					await fs.access(destPath);
					const { overwrite } = await prompts({
						type: 'confirm',
						name: 'overwrite',
						message: `The component "${componentName}" already exists. Do you want to replace it?`,
						initial: false
					});

					if (!overwrite) {
						console.log(`❌ Component "${componentName}" was not replaced.`);
						continue;
					}
				} catch {
					// File doesn't exist, continue as normal
				}

				await fetchFile(fileUrl, destPath);
				console.log(`✅ Component "${componentName}" added successfully.`);
			} catch (err) {
				console.error(
					`❌ Error adding component "${componentName}": ${err.message}`
				);
			}
		}
	} catch (err) {
		console.error(`❌ Error adding components: ${err.message}`);
	}
}
