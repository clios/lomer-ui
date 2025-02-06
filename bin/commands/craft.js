import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import Fuse from 'fuse.js';
import { fetchFile } from '../utils/fetchFile.js';
import { runCommand } from '../utils/runCommand.js';
import { RECIPES } from '../recipes.js';

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

export async function craft(recipe, fileName) {
  try {
    let hasRecipe = RECIPES.some((r) => r.name === recipe);

    if (!hasRecipe) {
      console.error('❌ Recipe NOT found.');
      console.error('e.g. npx lomer-ui craft [recipe] [describe].');
      process.exit(1);
    }

    if (!fileName) {
      console.log('❌ Describe the component you want to craft.');
      console.error('e.g. npx lomer-ui craft [recipe] [describe].');
      process.exit(1);
    }

    console.log(
      '\n\nCRAFTING SVELTE COMPONENT___________________________________\n'
    );

    const githubBaseURL =
      'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/components/recipes';
    const srcPath = `${githubBaseURL}/${recipe}.svelte`;

    const baseSrcPath = path.resolve('./src');
    const folders = await scanFolders(baseSrcPath);

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
      message: 'Enter or select the destination folder:',
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
      validate: (value) =>
        value.trim() ? true : 'Folder path cannot be empty.'
    });

    const destDir = path.resolve(response.destFolder);
    const destPath = path.join(destDir, `${fileName}.svelte`);

    // Check if component already exists
    if (await isFileExists(destPath)) {
      const { replace } = await prompts({
        type: 'confirm',
        name: 'replace',
        message: `Replace "${fileName}" component?`,
        initial: false
      });

      if (!replace) {
        console.log(`❌ Component "${fileName}" was not replaced.`);
        process.exit(1);
      }
    }

    await fs.mkdir(destDir, { recursive: true });
    await fetchFile(srcPath, destPath);
    console.log(`✅ Component "${fileName}" crafted.`);

    console.log(
      `\n\nDEPENDENCIES________________________________________________\n`
    );
    for (const r of RECIPES) {
      if (r.name === recipe) {
        await runCommand(`npx lomer-ui get ${r.dependencies}`);
        break;
      }
    }
  } catch (error) {
    console.log(`Exiting...`);
  }
}
