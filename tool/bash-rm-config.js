// store
const fileListStr = `
//.git
.hello
`;
let fileListArr;

const cmdOptsStr = `
--recursive
--force
`;
let cmdOptsArr;

// master
const toArr = data => data.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));
const tofileListArr = () => toArr(fileListStr);
fileListArr = tofileListArr();

const toOptionsListArr = () => toArr(cmdOptsStr);
cmdOptsArr = toOptionsListArr();

const toCmdArgForExeca = () => [...cmdOptsArr, ...fileListArr];
module.exports = {
  files: fileListArr,
  opts: cmdOptsArr,
  toCmdArgForExeca,
  tofileListArr
};
