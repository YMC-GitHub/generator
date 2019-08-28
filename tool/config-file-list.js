const fileListStr = `
//tool/git-tag-flow.js
//tool/git.js
tool/config-file-list.js
`;
const fileListArr = fileListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));

module.exports = fileListArr;
