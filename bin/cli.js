#!/usr/bin/env node

import { promises as fs } from 'fs';
import { spawn } from 'child_process';
import path from 'path';

const [, , command, component] = process.argv;

// Define source and destination paths
const SRC_DIR = path.resolve('./src/lib');
const DEST_DIR = path.resolve('./src/lib/components/ui');

// Add component
async function addComponent(componentName) {
	const srcPath = path.join(SRC_DIR, `${componentName}.svelte`);
	const destPath = path.join(DEST_DIR, `${componentName}.svelte`);

	try {
		// Ensure the destination directory exists
		await fs.mkdir(DEST_DIR, { recursive: true });

		// Copy the file
		await fs.copyFile(srcPath, destPath);
		console.log(`✅ Component "${componentName}" added successfully to "${DEST_DIR}"`);
	} catch (err) {
		console.error(`❌ Error: ${err.message}`);
	}
}

async function runCommand(command, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, { stdio: 'inherit', shell: true });

		child.on('close', (code) => {
			if (code !== 0) {
				reject(new Error(`Command failed with exit code ${code}`));
			} else {
				resolve();
			}
		});
	});
}

async function initProject() {
	try {
		console.log('🛠️ Initializing project...');
		await runCommand('npm', ['install', 'lomer-ui', 'clsx', 'mode-watcher', '@iconify/svelte']);
		console.log('✅ Project initialized successfully!');
	} catch (error) {
		console.error(`❌ Error initializing project: ${error.message}`);
	}
}

if (command === 'init') {
	initProject();
} else {
	console.error('❌ Invalid command. Usage: npx lomer-ui@latest init');
}

// if (command === 'add' && component) {
// 	addComponent(component);
// } else {
// 	console.error('❌ Invalid command. Usage: lomer-ui add <component>');
// }
