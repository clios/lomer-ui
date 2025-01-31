#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { add } from './commands/add.js';
import { update } from './commands/update.js';

const [, , command, ...components] = process.argv;

if (!command || command === '--help') {
	showHelp();
} else if (command === 'add') {
	add(components);
} else if (command === 'update') {
	update();
}

// SOMETHING ELSE
else {
	console.error('❌ Invalid command.');
	showHelp();
}
