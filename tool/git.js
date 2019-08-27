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
  return execa('git', ['commit', '--message', ...(args || [])], execaOptions || {});
}

function remote(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function push(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function mv(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function stash(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function tag(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
}
function diff(args, execaOptions) {
  return execa('git', ['status', ...(args || [])], execaOptions || {});
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
  gitCmdBuilder
};
