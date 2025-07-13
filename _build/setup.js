import path from "path";
import { fileURLToPath } from "url";

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../project');

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

    console.log("✅ Estrutura criada com sucesso!");
}

main().catch((err) => {
    console.error("❌ Erro no setup:", err);
});
