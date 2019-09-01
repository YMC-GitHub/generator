/* eslint-env node */
const { remote } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');

const { GITHUB_REPO, GITHUB_USER } = repoConfig;
logAsync(remote(['set-url', 'origin', `https://github.com/${GITHUB_USER}/${GITHUB_REPO}.git`], { cwd: repoConfig.dir }));
