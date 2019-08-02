/* eslint-env node */
/* eslint func-names: ["error", "never"] */
const config = {
  ES3: [
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-reserved-words'
  ],
  ES5: ['@babel/plugin-transform-property-mutators'],
  ES2015: [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-block-scoped-functions', '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-computed-properties',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-duplicate-keys', // maybe i will  delete
    '@babel/plugin-transform-for-of',
    '@babel/plugin-transform-function-name',
    '@babel/plugin-transform-instanceof',
    '@babel/plugin-transform-literals',
    '@babel/plugin-transform-new-target',
    '@babel/plugin-transform-object-super',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-sticky-regex',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-typeof-symbol',
    '@babel/plugin-transform-unicode-regex'
  ],
  ES2016: ['@babel/plugin-transform-exponentiation-operator'],
  ES2017: ['@babel/plugin-transform-async-to-generator'],
  ES2018: [
    // https://babeljs.io/docs/en/babel-plugin-proposal-async-generator-functions
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-transform-dotall-regex',
    '@babel/plugin-transform-named-capturing-groups-regex',
    // https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-unicode-property-regex'
  ],
  MODULES: [
    '@babel/plugin-transform-modules-amd',
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-modules-systemjs',
    '@babel/plugin-transform-modules-umd',
  ],
  // EXPERIMENTAL:
  Minification: [
    // https://babeljs.io/docs/en/babel-plugin-transform-inline-consecutive-adds
    '@babel/plugin-transform-inline-consecutive-adds',
    // https://babeljs.io/docs/en/babel-plugin-transform-inline-environment-variables
    'babel-plugin-transform-inline-environment-variables',
    // https://babeljs.io/docs/en/babel-plugin-transform-member-expression-literals
    'babel-plugin-transform-member-expression-literals',
    // https://babeljs.io/docs/en/babel-plugin-transform-merge-sibling-variables
    'babel-plugin-transform-merge-sibling-variables',
    // https://babeljs.io/docs/en/babel-plugin-transform-minify-booleans
    'babel-plugin-transform-minify-booleans',
    // https://babeljs.io/docs/en/babel-plugin-minify-builtins
    'babel-plugin-minify-builtins',
    // https://babeljs.io/docs/en/babel-plugin-minify-constant-folding
    'babel-plugin-minify-constant-folding',
    // https://babeljs.io/docs/en/babel-plugin-minify-dead-code-elimination
    'babel-plugin-minify-dead-code-elimination',
    // https://babeljs.io/docs/en/babel-plugin-minify-flip-comparisons
    'babel-plugin-minify-flip-comparisons',
    // https://babeljs.io/docs/en/babel-plugin-minify-guarded-expressions
    'babel-plugin-minify-guarded-expressions',
    // https://babeljs.io/docs/en/babel-plugin-minify-infinity
    'babel-plugin-minify-infinity',
    // https://babeljs.io/docs/en/babel-plugin-minify-mangle-names
    'babel-plugin-minify-mangle-names',
    // https://babeljs.io/docs/en/babel-plugin-minify-numeric-literals
    'babel-plugin-minify-numeric-literals',
    // https://babeljs.io/docs/en/babel-plugin-minify-replace
    'babel-plugin-minify-replace',
    // https://babeljs.io/docs/en/babel-plugin-minify-simplify
    'babel-plugin-minify-simplify',
    // https://babeljs.io/docs/en/babel-plugin-minify-type-constructors
    'babel-plugin-minify-type-constructors',
    // https://babeljs.io/docs/en/babel-plugin-transform-node-env-inline
    'babel-plugin-transform-node-env-inline',
    // https://babeljs.io/docs/en/babel-plugin-transform-property-literals
    'babel-plugin-transform-property-literals',
    // https://babeljs.io/docs/en/babel-plugin-transform-regexp-constructors
    'babel-plugin-transform-regexp-constructors',
    // https://babeljs.io/docs/en/babel-plugin-transform-remove-console
    'babel-plugin-transform-remove-console',
    // https://babeljs.io/docs/en/babel-plugin-transform-remove-debugger
    'babel-plugin-transform-remove-debugger',
    // https://babeljs.io/docs/en/babel-plugin-transform-remove-undefined
    'babel-plugin-transform-remove-undefined',
    // https://babeljs.io/docs/en/babel-plugin-transform-simplify-comparison-operators
    'babel-plugin-transform-simplify-comparison-operators',
    // https://babeljs.io/docs/en/babel-plugin-transform-undefined-to-void
    'babel-plugin-transform-undefined-to-void'
  ],
  REACT: [
    // https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements
    '@babel/plugin-transform-react-constant-elements',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-display-name
    '@babel/plugin-transform-react-display-name',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-inline-elements
    '@babel/plugin-transform-react-inline-elements',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
    '@babel/plugin-transform-react-jsx',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-compat
    '@babel/plugin-transform-react-jsx-compat',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-self
    '@babel/plugin-transform-react-jsx-self',
    // https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-source
    '@babel/plugin-transform-react-jsx-source'
  ],
  Other: [
    // https://babeljs.io/docs/en/babel-plugin-transform-typescript
    '@babel/plugin-transform-typescript',
    // https://babeljs.io/docs/en/babel-plugin-transform-strict-mode
    '@babel/plugin-transform-strict-mode',
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    '@babel/plugin-transform-runtime',
    // https://babeljs.io/docs/en/babel-plugin-transform-regenerator
    '@babel/plugin-transform-regenerator',
    // https://babeljs.io/docs/en/babel-plugin-transform-proto-to-assign
    '@babel/plugin-transform-proto-to-assign',
    // https://babeljs.io/docs/en/babel-plugin-transform-object-set-prototype-of-to-assign
    '@babel/plugin-transform-object-set-prototype-of-to-assign',
    // https://babeljs.io/docs/en/babel-plugin-transform-object-assign
    '@babel/plugin-transform-object-assign',
    // https://babeljs.io/docs/en/babel-plugin-transform-jscript
    '@babel/plugin-transform-jscript',
    // https://babeljs.io/docs/en/babel-plugin-transform-flow-strip-types
    '@babel/plugin-transform-flow-strip-types',
    // https://babeljs.io/docs/en/babel-plugin-external-helpers
    '@babel/plugin-external-helpers'
  ],
};
const BABEL_DIR = './my-babel-presets';
const path = require('path');
const fs = require('fs');
const util = require('util');
const makeDir = require('make-dir');

const existsFile = util.promisify(fs.exists);
const writeFile = util.promisify(fs.writeFile);

let manifest = [];
const getContent = function ({ name }) {
  return `const plugins = [['${name}']];

module.exports = { plugins };`;
};
const getUrl = function ({ url }) {
  return `${BABEL_DIR}/${url}`;
};
const getName = function (c) {
  let done = false;
  const regREPLACE = [
    '@babel/plugin-transform-',
    '@babel/plugin-proposal-',
    'babel-plugin-transform-',
    'babel-plugin-minify-',
    '@babel/plugin-transform-',
    '@babel/plugin-'
  ];
  // const c = '@babel/plugin-external-helpers';
  const t = regREPLACE.map((v) => {
    if (c.includes(v) && !done) {
      done = true;
      return c.replace(v, '');
    }
    return '';
  });
  // console.log(JSON.stringify(t, 2));
  // console.log(t.join(''));
  return t.join('');
};

const getManifest = function ({ key, data }) {
  return data.map((value) => {
    const name = getName(value);
    const url = getUrl({ url: `${key}/${name}.js` });
    return { content: getContent({ name: value }), url, dir: path.dirname(url) };
  });
};
const getBigManifest = function (data) {
  const cache = [];
  Object.keys(data).forEach(key => cache.push(getManifest({ data: data[key], key })));
  return cache;
};

const flatten = function (input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
};
// console.log(JSON.stringify(flatten(getBigManifest(config)), 2));
// manifest = getManifest({ key: 'ES5', data: config.ES5 });
manifest = flatten(getBigManifest(config));
// console.log(JSON.stringify(manifest, 2));

const writeData = function ({ url, content, dir }) {
  existsFile(dir).then((v) => {
    if (v === false) {
      return makeDir(dir);
    }
    return true;
  }).then((value) => {
    if (value === false) {
      //
    }
    return writeFile(url, content);
  }).then((file) => {
    if (file === false) {
      //
    }
    return true;
  });
};


manifest.forEach(v => writeData(v));
