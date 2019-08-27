/* eslint-disable no-console */
const main = (id, lib, download, future) => `${lib}[^${id}]|${download}|${future}|`;
module.exports = main;


const resut = [];
resut.push('类库|下载数量|下载趋势|');
resut.push(':----|:----|:----|');
resut.push(main('1', 'es6-promisify', '530万的周下载量', '上升'));
resut.push(main('2', 'promisify-node', '3.2万的周下载量', '平稳'));
resut.push(main('3', 'promisify-node', '3.2万的周下载量', '平稳'));
resut.push(main('4', 'nodejs-promisify', '143万的周下载量', '平稳'));
resut.push(main('5', 'p-event', '109万的周下载量', '平稳'));
resut.push(main('6', 'promisify-event', '12.5万的周下载量', '平稳'));
console.log(resut.join('\n'));
