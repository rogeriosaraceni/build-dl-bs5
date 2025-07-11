import path from "path";
import fs from "fs";
import { downloadFile } from "../_downloadFile.js";

export async function downloadVendorsCore(rootDir) {
  const baseDir = path.join(rootDir, "assets/vendors/core");

  const vendors = [
    {
      name: "fancybox",
      version: "6.0",
      baseCdn: (v) =>
        `https://cdn.jsdelivr.net/npm/@fancyapps/ui@${v}/dist/fancybox`,
      files: ["fancybox.css", "fancybox.umd.js"],
    },
    // Adicione outros vendors aqui no mesmo formato
    // {
    //     name: 'swiper',
    //     version: '11.0.5',
    //     baseCdn: (v) => `https://cdn.jsdelivr.net/npm/swiper@${v}`,
    //     files: ['swiper-bundle.min.css', 'swiper-bundle.min.js']
    // }
  ];

  for (const vendor of vendors) {
    const vendorDir = path.join(baseDir, vendor.name);
    fs.mkdirSync(vendorDir, { recursive: true });

    const cdnBase = vendor.baseCdn(vendor.version);

    for (const file of vendor.files) {
      const url = `${cdnBase}/${file}`;
      const dest = path.join(vendorDir, file);
      await downloadFile(url, dest);
    }
  }
}
