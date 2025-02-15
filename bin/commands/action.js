import fs from 'fs/promises';
import path from 'path';
import prompts from 'prompts';
import { fetchFile } from '../utils/fetchFile.js';

async function isFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function action(actions) {
  if (!Array.isArray(actions) || actions.length === 0) {
    console.log('❌ Please specify at least one action.');
    return;
  }

  const githubBaseURL =
    'https://raw.githubusercontent.com/clios/lomer-ui/main/src/lib/actions';
  const destDir = path.resolve('./src/lib/actions');

  await fs.mkdir(destDir, { recursive: true });

  for (const action of actions) {
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
