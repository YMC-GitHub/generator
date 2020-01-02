// store
const libListStr = `
//uses webpack in nodejs scripts
//"webpack": "^4.39.2",
//uses webpack in cli
//"webpack-cli": "^3.3.7",
//uses webpack in with sipmlpe server
//"webpack-dev-server": "^3.8.0",
//let webpack uses vue
//"vue-loader": "^14.2.4",
//"vue-style-loader": "^4.1.2",
//"vue-template-compiler": "^2.6.10",
//"file-loader": "^4.2.0",
//uses babel in nodejs scripts
//"@babel/core": "^7.5.5",
//"@babel/preset-env": "^7.5.5",
//let webpack uses babel
//"babel-loader": "^8.0.6",
//"babel-plugin-istanbul": "^5.2.0",
//"nyc":"^14.1.1",
"mocha": "^6.2.0",
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
console.log(`npm install ${optionsListArr.join(' ')} ${libListArr.join(' ')}`);
module.exports = {
  lib: libListArr,
  cmdArgs: optionsListArr,
  toCmdArgForExeca,
  toLibListArr
};
