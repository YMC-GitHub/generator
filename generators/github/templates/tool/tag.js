/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
//----------------------------
// config
//----------------------------
const TAG_VALUE = 'v1.0.0';
const FLOW = ['list', 'create', 'show'];

//----------------------------
// functions
//----------------------------
function tag(opts) {
  return execa('git', ['tag', ...(opts || [])]);
}
function create(opts) {
  return execa('git', ['tag', ...(opts || [])]);
}
function list(opts) {
  return execa('git', ['tag', ...(opts || [])]);
}
function show(opts) {
  return execa('git', ['show', ...(opts || [])]);
}
function del(opts) {
  return execa('git', ['tag', '--delete', ...(opts || [])]);
}
function delLocal(opts) {
  return del([...(opts || [])]);
}
function delRemote(opts) {
  return execa('git', ['push', 'origin ', ...(opts || [])]);
}
function pushOne(opts) {
  return execa('git', ['push', 'origin ', ...(opts || [])]);
}
function pushAll(opts) {
  return execa('git', ['push', 'origin ', '--tags', ...(opts || [])]);
}

//----------------------------
// helper
//----------------------------
function hasTag(value) {
  return list().then(msg => (msg.all.indexOf(value) >= 0));
}

//----------------------------
// task
//----------------------------
const task = {
  create() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(create([TAG_VALUE])));
  },
  list() {
    return logAsync(list());
  },
  show() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(show([TAG_VALUE])));
  },
  delLocal() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(delLocal([TAG_VALUE])));
  },
  delRemote() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(delRemote([`:refs/tags/${TAG_VALUE}`])));
  },
  pushOne() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(pushOne([`${TAG_VALUE}`])));
  },
  pushAll() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(pushAll()));
  },
};
FLOW.forEach(type => task[type] && task[type]());

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
