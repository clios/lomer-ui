import fs from 'fs/promises';
import { runCommand } from './runCommand.js';

export async function checkOrInstallTailwindMerge() {
  try {
    const packageJson = JSON.parse(await fs.readFile('package.json', 'utf-8'));

    if (packageJson.dependencies?.['tailwind-merge'] || packageJson.devDependencies?.['tailwind-merge']) {
      return;
    }

    await runCommand('npm', ['install', 'tailwind-merge']);
    console.log('✅ Tailwind Merge installed successfully.');
  } catch (error) {
    console.error(`❌ Error checking or installing Tailwind Merge: ${error.message}`);
    throw error;
  }
}
