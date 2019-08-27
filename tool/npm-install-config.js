// store
const libListStr = `
"@babel/core": "^7.5.5",
"@babel/plugin-transform-runtime": "^7.5.5",
"@babel/preset-env": "^7.5.5",
"@babel/runtime"
`;
let libListArr;
const type = '--save-dev';

// master
const toCmdArgForExeca = () => [type, ...libListArr];
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
  type,
  toCmdArgForExeca,
  toLibListArr
};
