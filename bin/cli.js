#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs/promises';
import fetch from 'node-fetch';

const [, , command, component] = process.argv;

// Define the GitHub raw URL for components
const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib';
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

async function fetchFile(fileUrl, destPath) {
	try {
		const response = await fetch(fileUrl); // Fetch using node-fetch

		if (!response.ok) {
			throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
		}

		const fileContent = await response.text(); // Get the file content
		await fs.writeFile(destPath, fileContent); // Write the content to the destination file
		console.log(`✅ File downloaded to: ${destPath}`);
	} catch (error) {
		console.error(`❌ Error downloading file: ${error.message}`);
		throw error; // Rethrow to handle in the calling function
	}
}

async function addComponent(componentName) {
	const fileUrl = `${GITHUB_BASE_URL}/${componentName}.svelte`;
	const destPath = path.join(DEST_DIR, `${componentName}.svelte`);

	try {
		// Ensure the destination folder exists
		await fs.mkdir(DEST_DIR, { recursive: true });

		// Fetch the file using curl
		await fetchFile(fileUrl, destPath);
		console.log(`✅ Component "${componentName}" added successfully.`);
	} catch (err) {
		console.error(`❌ Error adding component "${componentName}": ${err.message}`);
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

function showHelp() {
	console.log(`
Usage:
  lomer-ui init                 Initialize the project with lomer-ui
  lomer-ui add <component>      Add a specific component

Examples:
  lomer-ui init
  lomer-ui add Button
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
