/* eslint-env node */
const { push } = require('./git');
const { logAsync } = require('./console');
const IS_FIRST = false;
let result;
if (IS_FIRST) {
  result = push(['--set-upstream', 'origin', 'master']);
} else {
  result = push(['origin', 'master']);
}
logAsync(result);
