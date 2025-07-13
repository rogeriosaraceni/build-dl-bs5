#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

import { structure } from "./_structure.js";
import {
    getFileContent,
    rootIndexAsp,
    editorConfigContent,
    packageJsonContent,
} from "./_content.js";
import { createStructure, writeFile } from "./_helpers.js";

import { downloadLibs } from "./downloads/libs.js";
import { downloadBootstrap } from "./downloads/bootstrap.js";
import { downloadVendorsCore } from "./downloads/vendorsCore.js";

// Diretório atual deste script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho de destino: passado via linha de comando, ou "project" por padrão
const targetDirArg = process.argv[2];
const root = path.resolve(process.cwd(), targetDirArg || 'project');

// Se já existir, remove tudo
if (fs.existsSync(root)) {
    fs.rmSync(root, { recursive: true, force: true });
    console.log(`🗑️ Diretório existente removido: ${root}`);
}

// Cria o diretório base
fs.mkdirSync(root, { recursive: true });

async function main() {
    createStructure(root, structure, getFileContent);

    writeFile(path.join(root, ".editorconfig"), editorConfigContent);
    writeFile(path.join(root, "index.asp"), rootIndexAsp);
    writeFile(
        path.join(root, "package.json"),
        JSON.stringify(packageJsonContent, null, 2) + "\n"
    );

    await downloadLibs(root);
    await downloadBootstrap(root);
    await downloadVendorsCore(root);

    console.log(`✅ Estrutura criada com sucesso em: ${root}`);
}

main().catch((err) => {
    console.error("❌ Erro no setup:", err);
});
