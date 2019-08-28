/* eslint-env node */
const { log } = require('./git');
const { logAsync } = require('./console');
const fileListArr = require('./config-file-list');
const repoConfig = require('./config-repo');
const optionsListArr = require('./git-log-config');
let result;
result = log([...optionsListArr, ...fileListArr], { cwd: repoConfig.dir });
logAsync(result);
