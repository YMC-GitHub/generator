// 哪远程库
const ORIGIN = 'origin';
// 哪个分支
const BRANCH = 'master';
// 带有标签？
const TAGS = true;
// 首次提交？
const IS_FIRST = false;

const optionsListStr = `
${IS_FIRST ? '--set-upstream' : ''}
${ORIGIN}
${BRANCH}
${TAGS ? '--tags' : ''}
`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));
// console.log(optionsListArr);
module.exports = optionsListArr;
