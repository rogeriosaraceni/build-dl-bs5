import path from 'path';
import fs from 'fs';
import { downloadFile } from '../_downloadFile.js';

export async function downloadBootstrap(rootDir) {
  const bootstrapDir = path.join(rootDir, 'assets/bootstrap');
  fs.mkdirSync(bootstrapDir, { recursive: true });

  const version = '5.3.7';
  const baseCdn = `https://cdn.jsdelivr.net/npm/bootstrap@${version}/dist`;

  await downloadFile(`${baseCdn}/css/bootstrap.min.css`, path.join(bootstrapDir, 'bootstrap.min.css'));
  await downloadFile(`${baseCdn}/js/bootstrap.bundle.min.js`, path.join(bootstrapDir, 'bootstrap.bundle.min.js'));
}
