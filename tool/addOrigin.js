/* eslint-env node */
/* eslint-disable no-console */
const { remote } = require('./git');

const GITHUB_REPO = 'eslint-config';
const GITHUB_USER = 'ymc-github';

remote(['add', 'origin', `https://github.com/${GITHUB_USER}/${GITHUB_REPO}.git`])
  .then(report => console.log(report))
  .catch(err => console.log(err));
