/* eslint-env node */
const { diff } = require('./git');
const { logAsync } = require('./console');
const fileListArr = require('./config-file-list');
const repoConfig = require('./config-repo');
let result;
result = diff(fileListArr, { cwd: repoConfig.dir });
logAsync(result);
