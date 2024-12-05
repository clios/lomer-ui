#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs/promises';

const [, , command, component] = process.argv;

// Define source and destination paths
const SRC_DIR = path.resolve('./node_modules/lomer-ui/dist');
const DEST_DIR = path.resolve('./src/lib/components/ui');

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

async function copyFolder(src, dest) {
	try {
		await fs.mkdir(dest, { recursive: true });
		const entries = await fs.readdir(src, { withFileTypes: true });

		for (let entry of entries) {
			const srcPath = path.join(src, entry.name);
			const destPath = path.join(dest, entry.name);

			if (entry.isDirectory()) {
				await copyFolder(srcPath, destPath);
			} else {
				await fs.copyFile(srcPath, destPath);
			}
		}
	} catch (error) {
		throw new Error(`Failed to copy folder: ${error.message}`);
	}
}

async function initProject() {
	try {
		console.log('ℹ️ Initializing lomer-ui...');
		await runCommand('npm', ['install', 'lomer-ui', 'clsx', 'mode-watcher', '@iconify/svelte']);
		console.log('✅ Success');
	} catch (error) {
		console.error(`❌ Error initializing project: ${error.message}`);
	}
}

async function addComponent(componentName) {
	const srcPath = path.join(SRC_DIR, componentName);
	const destPath = path.join(DEST_DIR, componentName);

	try {
		await fs.access(srcPath); // Validate if the source exists
		await copyFolder(srcPath, destPath);
		console.log(`✅ Component "${componentName}" added successfully.`);
	} catch (err) {
		console.error(`❌ Error adding component "${componentName}": ${err.message}`);
	}
}

function showHelp() {
	console.log(`
Usage:
  myscript init                 Initialize the project with lomer-ui
  myscript add <component>      Add a specific component

Examples:
  myscript init
  myscript add Button
`);
}

if (!command || command === '--help') {
	showHelp();
} else if (command === 'init') {
	initProject();
} else if (command === 'add') {
	if (component) {
		addComponent(component);
	} else {
		console.error('❌ Please specify a component to add.');
	}
} else {
	console.error('❌ Invalid command.');
	showHelp();
}
