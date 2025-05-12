import fetch from 'node-fetch';
import fs from 'fs/promises';

export async function fetchFile(fileUrl, destPath) {
    try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        const fileContent = await response.text();
        await fs.writeFile(destPath, fileContent);
    } catch (error) {
        console.error(`❌ File not found.`);
        throw error;
    }
}
