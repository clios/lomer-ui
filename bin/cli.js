#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { get } from './commands/get.js';
import { craft } from './commands/craft.js';

const [, , command, ...components] = process.argv;

if (!command || command === '--help') {
  showHelp();
} else if (command === 'get') {
  get(components);
} else if (command === 'craft') {
  let recipe = components[0];
  let fileName = components[1];
  craft(recipe, fileName);
}

// SOMETHING ELSE
else {
  console.error('❌ Invalid command.');
  showHelp();
}
