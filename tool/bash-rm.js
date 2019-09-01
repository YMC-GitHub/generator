/* eslint-env node */
const { logAsync } = require('./console');
const execa = require('execa');
const repoConfig = require('./config-repo');
const { opts, files } = require('./bash-rm-config');
const main = () => execa('rm', [...opts, ...files], { cwd: repoConfig.dir });
logAsync(main());
module.exports = main;
