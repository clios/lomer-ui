import fs from 'fs/promises';

export async function checkSvelteKitApp() {
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
		console.log(`✅ SvelteKit detected.`);
		return;
	}

	console.log('❌ No SvelteKit project detected.');
	process.exit(1);
}
