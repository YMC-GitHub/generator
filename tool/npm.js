/* eslint-env node */
const execa = require('execa');
const keysStr = `
config
view
install
list
init
uninstall
`;
const keysArr = keysStr.split('\n').map(v => v.trim()).filter(v => (v !== ''));
const Engine = {};

keysArr.forEach((cmd) => {
  Engine[cmd] = (args, execaOptions) => execa('npm', [cmd, ...(args || [])], execaOptions || {});
});
module.exports = Engine;
