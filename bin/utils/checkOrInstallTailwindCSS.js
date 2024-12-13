import fs from 'fs/promises';
import { runCommand } from './runCommand.js';

export async function checkOrInstallTailwindCSS() {
	try {
		const packageJson = JSON.parse(await fs.readFile('package.json', 'utf-8'));

		if (
			packageJson.dependencies?.tailwindcss ||
			packageJson.devDependencies?.tailwindcss
		) {
			console.log('✅ TailwindCSS is already installed.');
			return;
		}

		console.log('❌ TailwindCSS not detected. Installing...');
		await runCommand('npx', ['sv', 'add', 'tailwindcss']);
		console.log('✅ TailwindCSS installed and initialized successfully.');
	} catch (error) {
		console.error(
			`❌ Error checking or installing TailwindCSS: ${error.message}`
		);
		throw error;
	}
}
