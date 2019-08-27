/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
const { init } = require('./git');
const repoConfig = require('./config-repo');

init([], { cwd: repoConfig.dir }).then(report => console.log(report)).catch(console.log);
