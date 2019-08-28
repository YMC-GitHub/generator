/* eslint-env node */
const execa = require('execa');

//----------------------------
// functions
//----------------------------
function tag(args, execaOptions) {
  return execa('git', ['tag', ...(args || [])], execaOptions || {});
}
function create(args, execaOptions) {
  return execa('git', ['tag', ...(args || [])], execaOptions || {});
}
function list(args, execaOptions) {
  return execa('git', ['tag', ...(args || [])], execaOptions || {});
}
function show(args, execaOptions) {
  return execa('git', ['show', ...(args || [])], execaOptions || {});
}
function del(args, execaOptions) {
  return execa('git', ['tag', '--delete', ...(args || [])], execaOptions || {});
}
function delLocal(args, execaOptions) {
  return del([...(args || [])], execaOptions || {});
}
function delRemote(args, execaOptions) {
  return execa('git', ['push', 'origin ', ...(args || [])], execaOptions || {});
}
function pushOne(args, execaOptions) {
  return execa('git', ['push', 'origin ', ...(args || [])], execaOptions || {});
}
function pushAll(args, execaOptions) {
  return execa('git', ['push', 'origin ', '--tags', ...(args || [])], execaOptions || {});
}
//----------------------------
// public apis
//----------------------------
module.exports = {
  tag,
  create,
  list,
  del,
  delLocal,
  delRemote,
  show,
  pushOne,
  pushAll
};
