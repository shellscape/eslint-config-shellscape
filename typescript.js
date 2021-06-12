const typescript = require('./configs/typescript.json');
const prettier = require('./configs/prettier.json');

typescript.rules = Object.assign(typescript.rules, { 'prettier/prettier': ['error', prettier] });

module.exports = typescript;
