// store
const libListStr = `
"webpack-dev-server": "^2.9.1"
`;
let libListArr;
const cmdArgs = `
--save-dev
`;
const optionsListArr = cmdArgs.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));


// master
const toCmdArgForExeca = () => [optionsListArr, ...libListArr];
const toLibListArr = () => libListStr.trim()
  .replace(/,/ig, '').split('\n')
  .filter(v => (v.trim() !== ''))
  .map((v) => {
    let cache = v.replace(/("|\s)/ig, '');
    if (cache.indexOf(':') >= 0) {
      cache = cache.split(':');
      const [name, version] = cache;
      // console.log(`${name}@${version}`);
      return `${name}@${version}`;
    }
    // console.log(`${cache}`);
    return cache;
  });

libListArr = toLibListArr();
module.exports = {
  lib: libListArr,
  cmdArgs,
  toCmdArgForExeca,
  toLibListArr
};
