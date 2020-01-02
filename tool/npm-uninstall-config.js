// store
const libListStr = `
//"vue-loader": "^12.2.2",
//"vue-template-compiler": "^2.4.4",
//"webpack": "^3.6.0",
//"webpack-dev-server": "^2.9.1",
//"file-loader": "^1.1.4",
"babel-core": "^6.26.3",
"babel-loader": "^7.1.2",
"babel-plugin-istanbul": "^4.1.5",
"babel-preset-env": "^1.7.0",
`;
let libListArr;
const optionsListStr = `

`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));


// master
const toCmdArgForExeca = () => [...optionsListArr, ...libListArr];
const toLibListArr = () => libListStr.trim()
  .replace(/,/ig, '').split('\n')
  .filter(v => (v.trim() !== '' && !/^\/\//.test(v)))
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
console.log(`npm uninstall ${optionsListArr.join(' ')} ${libListArr.join(' ')}`);
module.exports = {
  lib: libListArr,
  cmdArgs: optionsListArr,
  toCmdArgForExeca,
  toLibListArr
};
