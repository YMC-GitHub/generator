/* eslint-env node */
const execa = require('execa');
function config(opts) {
  return execa('npm', ['config', ...(opts || [])]);
}

module.exports = {
  config
};
