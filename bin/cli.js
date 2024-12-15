#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { addComponent } from './commands/addComponent.js';
import { addMultipleComponents } from './commands/addMultipleComponents.js';

const [, , command, component] = process.argv;

if (!command || command === '--help') {
	showHelp();
} else if (command === 'add') {
	if (component) {
		addComponent(component);
	} else {
		addMultipleComponents();
	}
} else {
	console.error('❌ Invalid command.');
	showHelp();
}
