/* eslint-env node */
const execa = require('execa');
/*
execa("git",["log","-n 1"]).then(result => {
    console.log(result.stdout);
}).catch(err => console.log(err));
*/
function init() {
  return execa('git', ['init']);
}
function addFile(file) {
  return execa('git', ['add', ...(file || [])]);
}
function addAll() {
  return execa('git', ['add', '.']);
}
function status() {
  return execa('git', ['status']);
}

function commit(message) {
  return execa('git', ['commit', '-m', message]);
}
function remote(opts) {
  return execa('git', ['remote', ...(opts || [])]);
}
function push(opts) {
  return execa('git', ['push', ...(opts || [])]);
}
function mv(opts) {
  return execa('git', ['mv', ...(opts || [])]);
}
function stash(opts) {
  return execa('git', ['stash', ...(opts || [])]);
}
function tag(opts) {
  return execa('git', ['tag', ...(opts || [])]);
}
function diff(opts) {
  return execa('git', ['diff', ...(opts || [])]);
}
module.exports = {
  init,
  addFile,
  addAll,
  status,
  commit,
  remote,
  push,
  mv,
  stash,
  tag,
  diff
};
