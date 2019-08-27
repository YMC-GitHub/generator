/* eslint-disable no-console */

const main = (pkg) => {
  const {
    author, lib, url, site
  } = pkg;
  let domain = '';
  if (site === 'github.com') {
    domain = '.github';
  }
  return `[${author}.${lib}${domain}](${url})`;
};


module.exports = main;

let pkgList = `
https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler
https://github.com/vuejs/vue-style-loader
https://github.com/webpack-contrib/css-loader
https://github.com/zinserjan/mocha-webpack
https://github.com/webpack-contrib/karma-webpack
https://github.com/karma-runner/karma-mocha
https://github.com/xdissent/karma-chai
https://github.com/mlex/karma-spec-reporter
https://github.com/karma-runner/karma-coverage
https://github.com/karma-runner/karma-chrome-launcher
https://github.com/vuejs/vue-test-utils
https://github.com/vuejs/eslint-plugin-vue
`;
pkgList = pkgList.trim().split('\n').map(v => v.trim()).filter(v => v);
const parseGitUrl = async (url) => {
  const authorReg = /\/(\w|-){1,}\//ig;
  const siteReg = /\/\w{1,}.(com|org|cn)\//ig;
  const author = url.match(authorReg)[0].split('/').filter(v => v).join('');
  const site = url.match(siteReg)[0].split('/').filter(v => v).join('');
  const lib = url.substring(url.lastIndexOf('/') + 1);
  return {
    author, lib, url, site
  };
};
const fun = item => parseGitUrl(item)
  .then(link => main(link))
  .catch(console.log);
const map = pkgList.map((item, id) => fun(item, id));
Promise.all(map).then(v => v.join('\n\n')).then(console.log).catch(console.log);
