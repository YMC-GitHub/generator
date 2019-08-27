/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
const { install } = require('./npm');
const repoConfig = require('./config-repo');
const { lib, type } = require('./npm-install-config');

install([type, ...lib], { cwd: repoConfig.dir }).then(report => console.log(report)).catch(console.log);
