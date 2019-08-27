/* eslint-disable no-console */
/* eslint-env node */
const { view } = require('./npm');
const util = require('util');

const main = pkg => view([pkg, '--json']).then((report) => {
  // console.log(report.stdout);
  const { name, homepage, repository } = JSON.parse(report.stdout);
  const { url } = repository;
  const authorReg = /\/\w{1,}\//ig;
  let author = '';
  if (util.isString(url)) {
    author = url.match(authorReg)[0].split('/').filter(v => v).join('');
  }
  // console.log(name, homepage, author);
  return {
    name,
    homepage,
    author,
    npmPage: `https://www.npmjs.com/package/${pkg}`
  };
}).catch(console.log);


module.exports = main;
// exmaple:
// main('promisify-event');
