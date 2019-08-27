/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
const { init } = require('./npm');
const repoConfig = require('./config-repo');

init(['--yes'], { cwd: repoConfig.dir }).then(report => console.log(report)).catch(console.log);
