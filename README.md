# eslint-config-shellscape

> ESLint shareable config for my projects

## Install

```
$ npm install eslint-config-shellscape --save-dev
```

## Usage

This config can be used one of two ways:

### package.json:

```json
{
  "name": "snoochi-boochies",
  "eslintConfig": {
    "extends": "shellscape"
  }
}
```

### .eslintrc

```json
{
  "extends": "shellscape"
}
```

### Use with TypeScript

```json
{
  "extends": "shellscape/typescript"
}
```

### Use with Prettier

Create a `.prettierrc.js` file with the following content:

```js
module.exports = require('eslint-config-shellscape/prettier');
```

## License

MIT © [Andrew Powell](http://shellscape.org)
