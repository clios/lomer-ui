import fs from 'fs/promises';
import { runCommand } from './runCommand.js';
import readline from 'readline';

function askQuestion(query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise((resolve) =>
		rl.question(query, (answer) => {
			rl.close();
			resolve(answer);
		})
	);
}

export async function checkOrCreateSvelteKitApp() {
	const sveltekitFiles = ['svelte.config.js', 'src/app.html', 'package.json'];

	const exists = await Promise.all(
		sveltekitFiles.map((file) =>
			fs
				.access(file)
				.then(() => true)
				.catch(() => false)
		)
	);

	if (exists.every(Boolean)) {
		console.log('✅ SvelteKit project detected.');
		return;
	}

	console.log('❌ No SvelteKit project detected.');
	const createApp = await askQuestion(
		'Do you want to create a new SvelteKit app? (y/n): '
	);

	if (createApp.toLowerCase() === 'y') {
		const appName = await askQuestion(
			'Enter the name of your new SvelteKit app: '
		);
		await runCommand('npx', ['sv', 'create', appName]);
		console.log(`✅ SvelteKit app '${appName}' created successfully.`);
		process.chdir(appName);
		console.log(`📂 Changed directory to '${appName}'.`);
		await runCommand('npm', ['install']);
		console.log('✅ Dependencies installed for the new SvelteKit app.');
		return appName;
	} else {
		console.log(
			'⚠️ Initialization stopped. Please create a SvelteKit app to continue.'
		);
		process.exit(1);
	}
}
