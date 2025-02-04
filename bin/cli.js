#!/usr/bin/env node

import { showHelp } from './helpers/showHelp.js';
import { add } from './commands/add.js';
import { update } from './commands/update.js';
import { get } from './commands/get.new.js';
import { craft } from './commands/craft.js';
import { craftWithRecipe } from './commands/craft_with_recipe.js';

const [, , command, ...components] = process.argv;

if (!command || command === '--help') {
  showHelp();
} else if (command === 'add') {
  add(components);
} else if (command === 'get') {
  get(components);
} else if (command === 'craft') {
  let recipe = components[0];
  let fileName = components[1];
  craftWithRecipe(recipe, fileName);
} else if (command === 'update') {
  update();
}

// SOMETHING ELSE
else {
  console.error('❌ Invalid command.');
  showHelp();
}
