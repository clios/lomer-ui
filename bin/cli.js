#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { addComponent } from './commands/addComponent.js';
import { addMultipleComponents } from './commands/addMultipleComponents.js';
import { scanAndResetComponents } from './commands/scanAndResetComponents.js';
import { initialize } from './commands/initialize.js';

const GITHUB_BASE_URL =
	'https://raw.githubusercontent.com/clios/lomer-ui/theme/src/lib/components/ui';

const DEST_DIR = path.resolve('./src/lib/components/ui');

const COMPONENTS = [
	'accordion',
	'alert',
	'button',
	'card-picker',
	'checkbox',
	'dialog',
	'drawer',
	'field',
	'input',
	'link',
	'radio',
	'scroll-area',
	'select',
	'switch',
	'textarea'
];

const [, , command, component] = process.argv;

// HELP
if (!command || command === '--help') {
	showHelp();
}

// ADDING ONE COMPONENT
else if (command === 'add' && component) {
	if (!COMPONENTS.includes(component)) {
		console.error('❌ Component NOT found.');
		return;
	}
	addComponent(component);
}

// ADDING MULTIPLE COMPONENTS
else if (command === 'add' && !component) {
	addMultipleComponents();
}

// UPDATING COMPONENTS
else if (command === 'update') {
	scanAndResetComponents();
}

// SOMETHING ELSE
else {
	console.error('❌ Invalid command.');
	showHelp();
}
