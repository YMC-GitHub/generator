/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
function listKeys(opts) {
  return execa('gpg', ['--list-keys', ...(opts || [])]);
}
function help() {
  return execa('gpg', ['--help']);
}
logAsync(help());

module.exports = {
  listKeys,
  help
};
