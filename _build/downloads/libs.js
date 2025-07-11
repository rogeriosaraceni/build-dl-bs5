import path from 'path';
import fs from 'fs';
import { downloadFile } from '../_downloadFile.js';

export async function downloadLibs(rootDir) {
  const libsDir = path.join(rootDir, 'assets/libs');
  fs.mkdirSync(libsDir, { recursive: true });

  const versionJquery = '3.7.1';
  const cdnUrlJquery = `https://code.jquery.com/jquery-${versionJquery}.min.js`;
  await downloadFile(cdnUrlJquery, path.join(libsDir, 'jquery.min.js'));
}
