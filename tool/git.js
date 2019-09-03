/* eslint-env node */
const execa = require('execa');
/*
execa("git",["log","-n 1"]).then(result => {
    console.log(result.stdout);
}).catch(err => console.log(err));
*/
function gitCmdBuilder(cmd, args, execaOptions) {
  return execa('git', [cmd, ...(args || [])], execaOptions || {});
}
function init(args, execaOptions) {
  return execa('git', ['init', ...(args || [])], execaOptions || {});
}
function add(args, execaOptions) {
  return execa('git', ['add', ...(args || [])], execaOptions || {});
}
function addFile(args, execaOptions) {
  return execa('git', ['add', ...(args || [])], execaOptions || {});
}
function addAll(args, execaOptions) {
  return execa('git', ['add', '.', ...(args || [])], execaOptions || {});
}
function status(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function commit(args, execaOptions) {
  return execa('git', ['commit', ...(args || [])], execaOptions || {});
}

function remote(args, execaOptions) {
  return execa('git', ['remote', ...(args || [])], execaOptions || {});
}
function push(args, execaOptions) {
  return execa('git', ['push', ...(args || [])], execaOptions || {});
}
function mv(args, execaOptions) {
  return execa('git', ['mv', ...(args || [])], execaOptions || {});
}
function stash(args, execaOptions) {
  return execa('git', ['stash', ...(args || [])], execaOptions || {});
}
function tag(args, execaOptions) {
  return execa('git', ['tag', ...(args || [])], execaOptions || {});
}
function diff(args, execaOptions) {
  return execa('git', ['diff', ...(args || [])], execaOptions || {});
}
function log(args, execaOptions) {
  return execa('git', ['log', ...(args || [])], execaOptions || {});
}
function checkout(args, execaOptions) {
  return execa('git', ['checkout', ...(args || [])], execaOptions || {});
}
module.exports = {
  init,
  add,
  addFile,
  addAll,
  status,
  commit,
  remote,
  push,
  mv,
  stash,
  tag,
  diff,
  log,
  checkout,
  gitCmdBuilder
};
