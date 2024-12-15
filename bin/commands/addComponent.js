import { fetchFile } from '../utils/fetchFile.js';
import fs from 'fs/promises';
import path from 'path';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';

const GITHUB_BASE_URL =
	'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib';
const DEST_DIR = path.resolve('./src/lib/components/ui');

export async function addComponent(componentName) {
	const fileUrl = `${GITHUB_BASE_URL}/${componentName}.svelte`;
	const destPath = path.join(DEST_DIR, `${componentName}.svelte`);

	try {
		await checkSvelteKitApp();
		await checkOrInstallTailwindCSS();
		await checkOrInstallTailwindMerge();

		await fs.mkdir(DEST_DIR, { recursive: true });
		await fetchFile(fileUrl, destPath);
		console.log(`✅ Component "${componentName}" added successfully.`);
	} catch (err) {
		console.error(
			`❌ Error adding component "${componentName}": ${err.message}`
		);
	}
}
