// store
const libListStr = `
"@babel/core": "^7.5.5",
"@babel/preset-env": "^7.5.5",
`;
let libListArr;
const optionsListStr = `
--save-dev
`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));


// master
const toCmdArgForExeca = () => [...optionsListArr, ...libListArr];
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
console.log(`npm install ${optionsListArr.join(' ')} ${libListArr.join(' ')}`);
module.exports = {
  lib: libListArr,
  cmdArgs: optionsListArr,
  toCmdArgForExeca,
  toLibListArr
};
