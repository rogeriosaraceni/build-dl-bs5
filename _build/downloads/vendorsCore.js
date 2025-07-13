import path from "path";
import fs from "fs";
import { downloadFile } from "../_downloadFile.js";

export async function downloadVendorsCore(rootDir) {
    const baseDir = path.join(rootDir, "assets/vendors/core");

    const vendors = [
        {
            name: "fancybox",
            version: "6.0",
            baseCdn: (v) => `https://cdn.jsdelivr.net/npm/@fancyapps/ui@${v}/dist/fancybox`,
            files: ["fancybox.css", "fancybox.umd.js"],
            targetSubDir: "", // salva direto em /fancybox
        },
        {
            name: "bootstrap-select",
            version: "1.14.0-beta3",
            files: [
                {
                    url: (v) => `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/${v}/css/bootstrap-select.min.css`,
                    target: "bootstrap-select/bootstrap-select.min.css",
                },
                {
                    url: (v) => `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/${v}/js/bootstrap-select.min.js`,
                    target: "bootstrap-select/bootstrap-select.min.js",
                },
                {
                    url: (v) => `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/${v}/js/i18n/defaults-pt_BR.min.js`,
                    target: "bootstrap-select/i18n/defaults-pt_BR.min.js",
                },
            ],
        },
    ];

    for (const vendor of vendors) {
        const vendorBase = path.join(baseDir, vendor.name);

        if (vendor.baseCdn) {
            // Fancybox ou outros que usam baseCdn comum
            fs.mkdirSync(vendorBase, { recursive: true });

            const cdnBase = vendor.baseCdn(vendor.version);

            for (const file of vendor.files) {
                const url = `${cdnBase}/${file}`;
                const dest = path.join(vendorBase, vendor.targetSubDir || "", file);
                await downloadFile(url, dest);
            }
        }

        if (vendor.files[0].url) {
            // Bootstrap-select ou outros com URLs distintas por arquivo
            for (const { url, target } of vendor.files) {
                const dest = path.join(baseDir, target);
                await downloadFile(url(vendor.version), dest);
            }
        }
    }
}
