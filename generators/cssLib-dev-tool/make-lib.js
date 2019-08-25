/* eslint-disable camelcase */
const makeSpaceLength = (space, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(space);
  }
  return result.join('');
};
const addTask = (data, fn) => {
  data.split(',').forEach((v) => {
    const him = v.trim();
    if (him !== '') {
      fn(him);
    }
  });
};

const main = (data) => {
  const result = [];
  const {
    babel,
    webpack, webpack_handles_vue,
    webpack_handles_css,
    webpack_handles_less,
    webpack_handles_sass,
    uses_simple_server,
    uses_complex_server,
    mocha,
    chai,
    karma,
    eslint,
    commitlint,
    stylelint
  } = data;
  if (babel) {
    const cache = `
    "@babel/core": "^7.5.5",
    "@babel/plugin-transform-runtime": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/runtime": "^7.5.5"
    `;
    addTask(cache, v => result.push(v));
  }
  if (webpack) {
    const cache = `
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.7",
    "webpack-dev-server": "^3.8.0",
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.0.0",
    "compression-webpack-plugin": "^3.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    `;
    addTask(cache, v => result.push(v));
  }
  if (webpack_handles_vue) {
    result.push('"vue-loader": "^14.2.4"');
    result.push('"vue-style-loader": "^4.1.2"');
    result.push('"vue-template-compiler": "^2.6.10"');
  }
  if (webpack_handles_css) {
    const cache = `
    "style-loader": "^1.0.0",
    "css-loader": "^3.2.0",
    "file-loader": "^4.2.0",
    "url-loader": "^2.1.0",
    "mini-css-extract-plugin": "^0.8.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "autoprefixer": "^9.6.1",
    "postcss-loader": "^3.0.0",
    `;
    addTask(cache, v => result.push(v));
  }
  if (webpack_handles_less) {
    const cache = `
    "less": "^3.9.0",
    "less-loader": "^5.0.0"
    `;
    addTask(cache, v => result.push(v));
  }
  if (webpack_handles_sass) {
    const cache = `
    "node-sass": "^4.12.0",
    "sass-loader": "^7.1.0",
    `;
    addTask(cache, v => result.push(v));
  }
  if (uses_simple_server) {
    const cache = `
    "webpack-dev-server": "^3.7.2",
    `;
    addTask(cache, v => result.push(v));
  }
  if (uses_complex_server) {
    const cache = `
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.17.1",
    "webpack-dev-middleware": "^1.8.3",
    "webpack-hot-middleware": "^2.22.2"
    `;
    addTask(cache, v => result.push(v));
  }
  if (mocha) {
    result.push('"mocha": "^6.2.0"');
  }
  if (chai) {
    result.push('"chai": "^4.1.2"');
  }
  if (karma) {
    const cache = `
    "karma": "^4.2.0",
    "karma-webpack": "^2.0.9",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-coverage": "^1.3.0",
    "karma-mocha": "^1.3.0",
    "karma-spec-reporter": "0.0.32",
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^2.2.0"
    `;
    addTask(cache, v => result.push(v));
  }
  if (commitlint) {
    const cache = `
    "@commitlint/cli": "^8.1.0",
    "@commitlint/lint": "^8.1.0",
    "@commitlint/read": "^8.1.0",
    "commitlint-config-yemiancheng": "^1.0.0",
    `;
    addTask(cache, v => result.push(v));
  }
  if (stylelint) {
    const cache = `
    "stylelint": "^10.1.0",
    `;
    addTask(cache, v => result.push(v));
  }
  if (eslint) {
    const cache = `
    "eslint": "^6.1.0",
    "eslint-config-yemiancheng": "^1.0.0",
    `;
    addTask(cache, v => result.push(v));
  }
  const other = `
  "cross-env": "^5.1.4",
  "nodemon": "^1.19.1",
  `;
  addTask(other, v => result.push(v));
  return result.join(`,\n${makeSpaceLength(' ', 4)}`);
};
module.exports = main;
