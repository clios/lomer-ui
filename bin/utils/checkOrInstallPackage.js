import fs from 'fs/promises';
import { runCommand } from './runCommand.js';

export async function checkOrInstallPackage(pkg) {
    try {
        const packageJson = JSON.parse(await fs.readFile('package.json', 'utf-8'));

        if (packageJson.dependencies?.[pkg] || packageJson.devDependencies?.[pkg]) {
            return;
        }

        console.log('Installing ' + pkg);
        await runCommand('npm', ['install', pkg]);
        console.log('✅ Successfully installed: ' + pkg);
    } catch (error) {
        console.error(`❌ Error checking or installing ${pkg}: ${error.message}`);
        throw error;
    }
}
