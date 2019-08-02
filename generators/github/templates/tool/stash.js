/* eslint-env node */
const execa = require('execa');
const { logAsync } = require('./console');
//----------------------------
// config
//----------------------------
const STASH_VALUE = 'v1.0.0';
const FLOW = ['list', 'create', 'show'];

//----------------------------
// functions
//----------------------------
function stash(opts) {
  return execa('git', ['stash', ...(opts || [])]);
}
function list(opts) {
  return stash(['list', ...(opts || [])]);
}
function show(opts) {
  return stash(['show', ...(opts || [])]);
}
function drop(opts) {
  return stash(['drop', ...(opts || [])]);
}

function create(opts) {
  return stash(['create', ...(opts || [])]);
}
function clear(opts) {
  return stash(['clear', ...(opts || [])]);
}
function store(opts) {
  return stash(['store', ...(opts || [])]);
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
    return hasTag(STASH_VALUE).then(bool => bool && logAsync(create([STASH_VALUE])));
  },
  list() {
    return logAsync(list());
  },
  show() {
    return hasTag(STASH_VALUE).then(bool => bool && logAsync(show([STASH_VALUE])));
  },
};
FLOW.forEach(type => task[type] && task[type]());

//----------------------------
// public apis
//----------------------------
module.exports = {
  create,
  list,
  show,
  drop,
  clear,
  store
};
