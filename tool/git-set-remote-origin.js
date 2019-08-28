/* eslint-env node */
const { remote } = require('./git');
const { logAsync } = require('./console');
const GITHUB_REPO = 'eslint-config';
const GITHUB_USER = 'ymc-github';
logAsync(remote(['set-url', 'origin', `https://github.com/${GITHUB_USER}/${GITHUB_REPO}.git`]));
