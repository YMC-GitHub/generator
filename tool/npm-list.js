/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
const { list } = require('./npm');
const repoConfig = require('./config-repo');

list([], { cwd: repoConfig.dir }).then(report => console.log(report)).catch(console.log);
