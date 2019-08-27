/* eslint-env node */
const { logAsync } = require('./console');
const { status } = require('./git');
const repoConfig = require('./config-repo');

// 设置工作目录
// status([], { cwd: repoConfig.dir }).then(report => console.log(report)).catch(console.log);
const main = status([], { cwd: repoConfig.dir });
logAsync(main);
