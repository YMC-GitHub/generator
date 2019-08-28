const optionsListStr = `
--pretty=oneline
--abbrev-commit
//the 2 line above is equals next line
//--oneline
`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));
// console.log(optionsListArr);
module.exports = optionsListArr;
