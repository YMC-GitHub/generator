const fileListStr = `
package-lock.json
package.json
`;
const fileListArr = fileListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));

module.exports = fileListArr;
