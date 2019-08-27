/* eslint-disable no-console */
const viewPkg = require('../tool/npmViewPkg');
const main = (id, author, lib, npm, github) => `[^${id}]:${author}.${lib} [npm](${npm}) [github](${github})`;
module.exports = main;

const pkgList = [
  /*
  'pify',
  'es6-promisify',
  'promisify-node',
  'node-promisify',
  'p-event',
  */
  'promisify-event'
];

const fun = (item, key) => viewPkg(item)
  .then(pkg => main(key + 1, pkg.author, pkg.name, pkg.npmPage, pkg.homepage))
  .catch(console.log);
const map = pkgList.map((item, id) => fun(item, id));
Promise.all(map).then(v => v.join('\n')).then(console.log).catch(console.log);
