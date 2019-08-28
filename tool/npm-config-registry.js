/* eslint-env node */
const { config } = require('./npm');
const { logAsync } = require('./console');
const inChina = false;
let result;
// 查看

// 设置
if (inChina) {
  result = config(['set', 'registry', 'http://registry.npm.taobao.org/']);
} else {
  result = config(['set', 'registry', 'https://registry.npmjs.org/']);
}
// 还原

logAsync(result);
