#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { get } from './commands/get.js';
import { craft } from './commands/craft.js';
import { action } from './commands/action.js';

const [, , command, ...components] = process.argv;

if (!command || command === '--help') {
    showHelp();
} else if (command === 'get') {
    get(components);
} else if (command === 'craft') {
    let recipe = components[0];
    let fileName = components[1];
    craft(recipe, fileName);
} else if (command === 'action') {
    let actions = components;
    action(actions);
}

// SOMETHING ELSE
else {
    console.error('❌ Invalid command.');
    showHelp();
}
