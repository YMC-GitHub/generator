/* eslint-env node */
const { logAsync } = require('./console');
const { commit } = require('./git');
const repoConfig = require('./config-repo');

const main = msg => commit(['--message', msg], { cwd: repoConfig.dir });
module.exports = main;
