const fileListStr = `
tool/config-file-list.js
tool/index.js
`;
const fileListArr = fileListStr.split('\n').map(v => v.trim()).filter(v => (v !== ''));

module.exports = fileListArr;
