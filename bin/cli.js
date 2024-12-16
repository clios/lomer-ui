#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { addComponent } from './commands/addComponent.js';
import { addMultipleComponents } from './commands/addMultipleComponents.js';
import { scanAndResetComponents } from './commands/scanAndResetComponents.js';

const [, , command, component] = process.argv;

if (!command || command === '--help') {
	showHelp();
} else if (command === 'add') {
	if (component) {
		addComponent(component);
	} else {
		addMultipleComponents();
	}
} else if (command === 'reset') {
	scanAndResetComponents();
} else {
	console.error('❌ Invalid command.');
	showHelp();
}
