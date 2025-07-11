import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

import { structure } from './structure.js';
import { getFileContent, rootIndexAsp, editorConfigContent, packageJsonContent } from './content.js';
import { createStructure, writeFile } from './helpers.js';

// Suporte ao __dirname com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

// Criar estrutura de pastas/arquivos
createStructure(root, structure, getFileContent);

// Arquivos extras na raiz
writeFile(path.join(root, '.editorconfig'), editorConfigContent);
writeFile(path.join(root, 'index.asp'), rootIndexAsp);
writeFile(path.join(root, 'README.md'), '# Projeto dlfelix-bs5\n\nEstrutura criada automaticamente.\n');
writeFile(path.join(root, 'package.json'), JSON.stringify(packageJsonContent, null, 2));

// Baixar jQuery (opcional)
const jqueryUrl = 'https://code.jquery.com/jquery-3.7.1.min.js';
const jqueryDest = path.join(root, 'libs', 'jquery-3.7.1.min.js');

https.get(jqueryUrl, res => {
    if (res.statusCode !== 200) return console.error('Erro ao baixar jQuery:', res.statusCode);
    const file = fs.createWriteStream(jqueryDest);
    res.pipe(file).on('finish', () => {
        console.log('✅ jQuery salvo em /libs/jquery-3.7.1.min.js');
    });
});

// Logs finais
console.log('✅ Estrutura criada com sucesso!');
