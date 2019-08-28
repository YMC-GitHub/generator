/* eslint-env node */

const { logAsync } = require('./console');
const { init } = require('./npm');
const repoConfig = require('./config-repo');

logAsync(init(['--yes'], { cwd: repoConfig.dir }));
