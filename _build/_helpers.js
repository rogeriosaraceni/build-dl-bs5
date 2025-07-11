import fs from 'fs';
import path from 'path';

export function writeFile(filePath, content) {
    if (!content.endsWith('\n')) content += '\n';
    fs.writeFileSync(filePath, content, 'utf8');
}

export function createStructure(baseDir, structure, getFileContent) {
    for (const [dir, files] of Object.entries(structure)) {
        const fullDir = path.join(baseDir, dir);
        fs.mkdirSync(fullDir, { recursive: true });

        files.forEach(file => {
            const filePath = path.join(fullDir, file);
            const content = getFileContent(dir, file);
            writeFile(filePath, content);
        });
    }
}
