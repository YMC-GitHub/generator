/* eslint-env node */
const { logAsync } = require('./console');
const { add } = require('./git');
const repoConfig = require('./config-repo');

const main = files => add(files, { cwd: repoConfig.dir });
module.exports = main;
