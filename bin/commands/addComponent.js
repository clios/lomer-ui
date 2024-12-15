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

async function promptUser(question) {
	const response = await prompts({
		type: 'confirm',
		name: 'replace',
		message: question,
		initial: false
	});
	return response.replace;
}

export async function addComponent(componentName) {
	const fileUrl = `${GITHUB_BASE_URL}/${componentName}.svelte`;
	const destPath = path.join(DEST_DIR, `${componentName}.svelte`);

	try {
		await fs.mkdir(DEST_DIR, { recursive: true });

		// Check if the component already exists
		try {
			await fs.access(destPath);
			const userResponse = await promptUser(
				`The component "${componentName}" already exists. Do you want to replace it?`
			);

			if (!userResponse) {
				console.log(`❌ Component "${componentName}" was not replaced.`);
				return;
			}
		} catch {
			// File doesn't exist, continue as normal
		}

		await checkSvelteKitApp();
		await checkOrInstallTailwindCSS();
		await checkOrInstallTailwindMerge();

		await fetchFile(fileUrl, destPath);
		console.log(`✅ Component "${componentName}" added successfully.`);
	} catch (err) {
		console.error(
			`❌ Error adding component "${componentName}": ${err.message}`
		);
	}
}
