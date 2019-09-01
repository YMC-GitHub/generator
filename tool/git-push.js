/* eslint-env node */
const { push: pushTo } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');
const pushConfig = require('./git-push-config');


let result;
result = pushTo(pushConfig, { cwd: repoConfig.dir });
logAsync(result);
