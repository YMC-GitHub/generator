/* eslint-env node */
const { checkout } = require('./git');
const { logAsync } = require('./console');
const fileListArr = require('./config-file-list');
const repoConfig = require('./config-repo');
const optionsListArr = require('./git-checkout-config');
let result;
result = checkout([...optionsListArr, ...fileListArr], { cwd: repoConfig.dir });
logAsync(result);
