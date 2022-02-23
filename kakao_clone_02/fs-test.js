// import fs from 'node:fs';
// import path from 'node:path';
// import {dirname} from 'node:path';
// import { fileURLToPath } from 'node:url';

const fs = require('node:fs');
const path = require('node:path');
const dirname = require('node:path');
const fileURLToPath = require('node:url');

// const dirName = dirname(fileURLToPath(import.meta.url));
// const dirPath = path.join(dirName, '/components/', 'sample.json');
// const sample = JSON.parse(fs.readFileSync(dirPath));


const sample = JSON.parse(fs.readFileSync('./components/sample.json')); // 성공

console.log('hello world!');
console.log(sample);

