/* eslint-env node */
const { logAsync } = require('./console');
const { install } = require('./npm');
const repoConfig = require('./config-repo');
const { lib, cmdArgs } = require('./npm-install-config');

logAsync(install([...cmdArgs, ...lib], { cwd: repoConfig.dir }));
