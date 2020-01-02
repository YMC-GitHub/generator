const optionsListStr = `
//--pretty=oneline
//--abbrev-commit
//the 2 line above is equals next line
//--oneline

//--pretty=short
//--pretty=medium
//--pretty=full
//--pretty=fuller
//--pretty=raw
//--pretty=format:"The author of %h was %an, %ar%nThe title was >>%s<<%n"
//--pretty=format:%an %ae %n%h %s %n%n%b
--pretty=format:%s %n%n%b
`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));
// console.log(optionsListArr);
module.exports = optionsListArr;
