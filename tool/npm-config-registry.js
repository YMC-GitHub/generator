/* eslint-env node */
const { config } = require('./npm');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');


const inChina = false;
let result;
// 查看

// 设置
if (inChina) {
  result = config(['set', 'registry', 'http://registry.npm.taobao.org/'], { cwd: repoConfig.dir });
} else {
  result = config(['set', 'registry', 'https://registry.npmjs.org/'], { cwd: repoConfig.dir });
}
// 还原

logAsync(result);
