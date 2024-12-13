import { runCommand } from '../utils/runCommand.js';
import { checkOrCreateSvelteKitApp } from '../utils/checkOrCreateSvelteKitApp.js';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';

export async function initProject() {
	try {
		console.log('Initializing lomer-ui...');

		await checkOrCreateSvelteKitApp();
		await checkOrInstallTailwindCSS();

		await runCommand('npm', ['install', 'tailwind-merge', '--save-dev']);
		await runCommand('npm', ['install', 'mode-watcher']);
		console.log('✅ Dependencies installed successfully.');

		console.log('✅ lomer-ui initialization complete.');
	} catch (error) {
		console.error(`❌ Error initializing project: ${error.message}`);
	}
}
