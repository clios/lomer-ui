import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { COMPONENTS } from '../components.js';
import { checkOrInstallTailwindCSS } from '../utils/checkOrInstallTailwindCSS.js';
import { checkOrInstallTailwindMerge } from '../utils/checkOrInstallTailwindMerge.js';
import { checkSvelteKitApp } from '../utils/checkSvelteKitApp.js';
import { fetchFile } from '../utils/fetchFile.js';

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

    if (cssFileContent.includes('lib/components/base/lomer.css')) {
      console.log('ℹ️ lomer.css is already imported.');
      return;
    }

    const updatedContent = cssFileContent.replace(
      /@import\s+['"]tailwindcss(?:\/base|\/components|\/utilities)?['"]\s*;/g,
      (match) => `${match}\n@import './lib/components/base/lomer.css';`
    );

    await fs.writeFile(cssFilePath, updatedContent, 'utf8');
    // console.log(`✅ Updated ${cssFilePath}.`);
  } catch (err) {
    console.error(`❌ Failed to update ${cssFilePath}: ${err.message}`);
  }
}

async function setupTailwind() {
  await checkSvelteKitApp();
  await checkOrInstallTailwindCSS();
  await checkOrInstallTailwindMerge();

  const destDir = path.resolve('./src');
  const destAppCSS = path.join(destDir, 'app.css');

  if (await isFileExists(destAppCSS)) {
    await updateCSSFile('./src/app.css');
  } else {
    const { cssFilePath } = await prompts({
      type: 'text',
      name: 'cssFilePath',
      message: 'Where is TailwindCSS imported? (default: ./src/app.css)',
      initial: './src/app.css'
    });
    await updateCSSFile(cssFilePath);
  }
}

export async function get(components) {
  if (!Array.isArray(components) || components.length === 0) {
    console.log('❌ Please specify at least one component.');
    return;
  }

  const githubBaseURL =
    'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/components/base';
  const destDir = path.resolve('./src/lib/components/base');
  const destLomer = path.join(destDir, 'lomer.css');

  // Track components to add (ensure no duplicates)
  const toAdd = new Set();

  function collectDependencies(compName) {
    const component = COMPONENTS.find((c) => c.name === compName);
    if (!component || toAdd.has(compName)) return;

    toAdd.add(compName);
    component.dependencies.forEach(collectDependencies); // Recursively add dependencies
  }

  components.forEach(collectDependencies);

  // Validate components
  const invalidComponents = [...toAdd].filter(
    (c) => !COMPONENTS.some((comp) => comp.name === c)
  );
  if (invalidComponents.length > 0) {
    console.log(`❌ Invalid components: ${invalidComponents.join(', ')}`);
    return;
  }

  await fs.mkdir(destDir, { recursive: true });

  // Ensure lomer.css exists
  if (!(await isFileExists(destLomer))) {
    // const { confirmation } = await prompts({
    //   type: 'confirm',
    //   name: 'confirmation',
    //   message: 'Initialize?',
    //   initial: true
    // });

    // if (!confirmation) {
    //   console.log('❌ Initialization canceled.');
    //   return;
    // }

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
        message: `Update ${component} component?`,
        initial: false
      });

      if (!replace) {
        // console.log(`Component "${component}" was not updated.`);
        continue;
      }
    }

    await fetchFile(srcPath, destPath);
    console.log(`✅ Component "${component}" added.`);
  }

  // FOR ACTIONS
  await getActionsForComponents(components);
}

async function getActionsForComponents(components) {
  const githubBaseURL =
    'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/actions';
  const destDir = path.resolve('./src/lib/actions');

  // Track actions to add (ensure no duplicates)
  const toAdd = new Set();

  function collectActions(compName) {
    const component = COMPONENTS.find((c) => c.name === compName);
    if (!component) return;

    component.actions.forEach((action) => toAdd.add(action));
    component.dependencies.forEach(collectActions);
  }

  components.forEach(collectActions);

  // List of valid actions from all components
  const validActions = new Set(COMPONENTS.flatMap((comp) => comp.actions));

  // Validate collected actions
  const invalidActions = [...toAdd].filter(
    (action) => !validActions.has(action)
  );

  if (invalidActions.length > 0) {
    console.log(`❌ Invalid actions: ${invalidActions.join(', ')}`);
    return;
  }

  await fs.mkdir(destDir, { recursive: true });

  for (const action of toAdd) {
    const srcPath = `${githubBaseURL}/${action}.svelte.ts`;
    const destPath = path.join(destDir, `${action}.svelte.ts`);

    // Check if action already exists
    if (await isFileExists(destPath)) {
      const { replace } = await prompts({
        type: 'confirm',
        name: 'replace',
        message: `Update ${action} action?`,
        initial: false
      });

      if (!replace) {
        console.log(`Action "${action}" was not updated.`);
        continue;
      }
    }

    await fetchFile(srcPath, destPath);
    console.log(`✅ Action "${action}" added.`);
  }
}
