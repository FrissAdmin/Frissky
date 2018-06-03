import fs   from 'fs';
import path from 'path';

const DIST_DIR   = path.resolve(__dirname, '../../dist');
const FILENAMES  = fs.readdirSync(DIST_DIR);
const STYLESHEET = FILENAMES.find((f) => /\.css$/.test(f));
const BUNDLE     = FILENAMES.find((f) => /\.js$/.test(f));

export default (source) => source
  .replace('{{STYLESHEET}}', path.join('/dist', STYLESHEET))
  .replace('{{BUNDLE}}', path.join('/dist', BUNDLE));
