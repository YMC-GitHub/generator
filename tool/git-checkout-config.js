const optionsListStr = `
--
package-lock.json
package.json
`;
const optionsListArr = optionsListStr.split('\n').filter(v => (v.trim() !== '' && !/^\/\//.test(v)));
// console.log(optionsListArr);
module.exports = optionsListArr;
