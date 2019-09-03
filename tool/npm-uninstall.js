/* eslint-env node */
const { logAsync } = require('./console');
const { uninstall } = require('./npm');
const repoConfig = require('./config-repo');
const { lib, cmdArgs } = require('./npm-uninstall-config');

logAsync(uninstall([cmdArgs, ...lib], { cwd: repoConfig.dir }));
