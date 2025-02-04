import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { fetchFile } from '../utils/fetchFile.js';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';

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

const COMPONENT_DEPENDENCIES = {
  accordion: ['button'],
  'card-picker': ['button'],
  dialog: ['button'],
  drawer: ['button'],
  select: ['button']
};

async function isFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function updateCSSFile(cssFilePath) {
  try {
    const cssFileContent = await fs.readFile(cssFilePath, 'utf8');

    if (cssFileContent.includes('lib/components/ui/lomer.css')) {
      console.log('ℹ️ lomer.css is already imported.');
      return;
    }

    const updatedContent = cssFileContent.replace(
      /@import\s+['"]tailwindcss(?:\/base|\/components|\/utilities)?['"]\s*;/g,
      (match) => `${match}\n@import './lib/components/ui/lomer.css';`
    );

    await fs.writeFile(cssFilePath, updatedContent, 'utf8');
    console.log(`✅ Updated ${cssFilePath} to include lomer.css`);
  } catch (err) {
    console.error(`❌ Failed to update ${cssFilePath}: ${err.message}`);
  }
}

async function setupTailwind() {
  await checkSvelteKitApp();
  await checkOrInstallTailwindCSS();
  await checkOrInstallTailwindMerge();

  const { cssFilePath } = await prompts({
    type: 'text',
    name: 'cssFilePath',
    message: 'Where is TailwindCSS imported? (default: ./src/app.css)',
    initial: './src/app.css'
  });

  await updateCSSFile(cssFilePath);
}

export async function get(components) {
  if (!Array.isArray(components) || components.length === 0) {
    console.log('❌ Please specify at least one component.');
    return;
  }

  const githubBaseURL =
    'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/components/ui';
  const destDir = path.resolve('./src/lib/components/ui');
  const destLomer = path.join(destDir, 'lomer.css');

  // Track components to add (ensure no duplicates)
  const toAdd = new Set();

  function collectDependencies(comp) {
    if (!toAdd.has(comp)) {
      toAdd.add(comp);
      const deps = COMPONENT_DEPENDENCIES[comp] || [];
      deps.forEach(collectDependencies); // Recursively add dependencies
    }
  }

  components.forEach(collectDependencies);

  // Validate components
  const invalidComponents = [...toAdd].filter((c) => !COMPONENTS.includes(c));
  if (invalidComponents.length > 0) {
    console.log(`❌ Invalid components: ${invalidComponents.join(', ')}`);
    return;
  }

  await fs.mkdir(destDir, { recursive: true });

  // Ensure lomer.css exists
  if (!(await isFileExists(destLomer))) {
    const { confirmation } = await prompts({
      type: 'confirm',
      name: 'confirmation',
      message: 'The lomer.css not found. Initialize?',
      initial: true
    });

    if (!confirmation) {
      console.log('❌ Initialization canceled.');
      return;
    }

    await setupTailwind();
    await fetchFile(`${githubBaseURL}/lomer.css`, destLomer);
  }

  for (const component of toAdd) {
    const srcPath = `${githubBaseURL}/${component}.svelte`;
    const destPath = path.join(destDir, `${component}.svelte`);

    // Check if component already exists
    if (await isFileExists(destPath)) {
      const { replace } = await prompts({
        type: 'confirm',
        name: 'replace',
        message: `Replace ${component} component?`,
        initial: false
      });

      if (!replace) {
        console.log(`❌ Component "${component}" was not replaced.`);
        continue;
      }
    }

    await fetchFile(srcPath, destPath);
    console.log(`✅ Component "${component}" added.`);
  }
}
