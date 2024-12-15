#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { addComponent } from './commands/addComponent.js';

const [, , command, component] = process.argv;

if (!command || command === '--help') {
	showHelp();
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
