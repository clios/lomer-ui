import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import Fuse from 'fuse.js';
import { fetchFile } from '../utils/fetchFile.js';

const RECIPES = [
  'accordion-disabled',
  'accordion-loading',
  'accordion-single-mode',
  'accordion-usage',
  'alert-closable',
  'alert-custom-icon',
  'alert-usage'
];

async function isFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function scanFolders(basePath) {
  async function getAllFolders(dir, folders = []) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const fullPath = path.join(dir, entry.name);
          folders.push(fullPath);
          await getAllFolders(fullPath, folders);
        }
      }
    } catch (error) {
      console.error(`❌ Error scanning folders: ${error.message}`);
    }
    return folders;
  }
  return getAllFolders(basePath);
}

export async function craft(fileName) {
  if (!fileName) {
    console.log('❌ Please specify the component name you want to craft.');
    return;
  }

  const githubBaseURL =
    'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/components/recipes';
  const srcPath = `${githubBaseURL}/${fileName}.svelte`;

  const baseSrcPath = path.resolve('./src');
  const folders = await scanFolders(baseSrcPath);

  // Normalize paths for fuzzy search & display
  const recipeData = RECIPES.map((recipe) => ({
    path: `${githubBaseURL}/${recipe}.svelte`, // Full path
    display: recipe,
    name: recipe
  }));

  // Fuse.js setup
  const fuseRecipe = new Fuse(recipeData, {
    keys: ['name'],
    includeScore: true,
    threshold: 0.6,
    useExtendedSearch: true
  });

  const { recipe } = await prompts({
    type: 'autocomplete',
    name: 'recipe',
    message: 'Select or enter recipe:',
    choices: recipeData.map(({ path, display }) => ({
      title: display,
      value: path
    })),
    suggest: (input, choices) => {
      if (!input) return choices;
      const results = fuseRecipe.search(input);
      return results.map((result) => ({
        title: result.item.display,
        value: result.item.path
      }));
    },
    validate: (value) => (value.trim() ? true : '❌ Please select recipe.')
  });

  // Normalize paths for fuzzy search & display
  const folderData = folders.map((folder) => ({
    path: folder, // Full path
    display: path.relative(baseSrcPath, folder), // Relative to ./src
    name: path.basename(folder) // Last folder name for fuzzy search
  }));

  // Fuse.js setup
  const fuse = new Fuse(folderData, {
    keys: ['name'],
    includeScore: true,
    threshold: 0.6,
    useExtendedSearch: true
  });

  const response = await prompts({
    type: 'autocomplete',
    name: 'destFolder',
    message: 'Select or enter the destination folder:',
    choices: folderData.map(({ path, display }) => ({
      title: display, // Display as relative to src
      value: path // Store full path
    })),
    suggest: (input, choices) => {
      if (!input) return choices;
      const results = fuse.search(input);
      return results.map((result) => ({
        title: result.item.display, // Keep src-based display
        value: result.item.path
      }));
    },
    initial: './src/lib/components',
    validate: (value) => (value.trim() ? true : 'Folder path cannot be empty.')
  });

  const destDir = path.resolve(response.destFolder);
  const destPath = path.join(destDir, `${fileName}.svelte`);

  // Check if component already exists
  if (await isFileExists(destPath)) {
    const { replace } = await prompts({
      type: 'confirm',
      name: 'replace',
      message: `Replace ${fileName} component?`,
      initial: false
    });

    if (!replace) {
      console.log(`❌ Component "${fileName}" was not replaced.`);
    }
  }

  try {
    await fs.mkdir(destDir, { recursive: true });
    console.log(`✅ Destination folder set: ${destDir}`);
  } catch (error) {
    console.error(`❌ Failed to create folder: ${error.message}`);
  }

  await fetchFile(recipe, destPath);
  console.log(`✅ Component "${fileName}" crafted.`);
}
