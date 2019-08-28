/* eslint-env node */

const { logAsync } = require('./console');
const { list } = require('./npm');
const repoConfig = require('./config-repo');

logAsync(list([], { cwd: repoConfig.dir }));
