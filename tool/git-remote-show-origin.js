/* eslint-env node */
const { remote } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');

logAsync(remote(['show', 'origin'], { cwd: repoConfig.dir }));
