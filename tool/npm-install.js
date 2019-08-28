/* eslint-env node */
const { logAsync } = require('./console');
const { install } = require('./npm');
const repoConfig = require('./config-repo');
const { lib, type } = require('./npm-install-config');

logAsync(install([type, ...lib], { cwd: repoConfig.dir }));
