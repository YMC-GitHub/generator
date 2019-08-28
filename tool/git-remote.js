
/* eslint-env node */
const { remote } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');
let result;
result = remote([], { cwd: repoConfig.dir });
logAsync(result);
