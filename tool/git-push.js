/* eslint-env node */
const { push } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');


const IS_FIRST = false;
let result;
if (IS_FIRST) {
  result = push(['--set-upstream', 'origin', 'master'], { cwd: repoConfig.dir });
} else {
  result = push(['origin', 'master'], { cwd: repoConfig.dir });
}
logAsync(result);
