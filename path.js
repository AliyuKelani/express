const path = require('path');
console.log(path.sep, path.delimiter);
const filePath = path.join('text','dep','hello.in')
console.log(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
const extname = path.extname(filePath);
console.log(basename, dirname, extname);
const absolute = path.resolve(__dirname,'text','dep','hello.in');
console.log(absolute);