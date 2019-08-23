/* eslint-env node */
const execa = require('execa');
function config(opts) {
  return execa('npm', ['config', ...(opts || [])]);
}
function view(opts) {
  return execa('npm', ['view', ...(opts || [])]);
}
module.exports = {
  config,
  view
};
