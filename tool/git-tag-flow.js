/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-env node */

//----------------------------
// public apis
//----------------------------
const {
  create,
  list,
  delLocal,
  delRemote,
  show,
  pushOne,
  pushAll
} = require('./git-tag');

const { logAsync } = require('./console');

//----------------------------
// config
//----------------------------
const TAG_VALUE = 'v1.0.0';
const FLOW = [
  'list',
  'create',
  'list',
  // 'show'
];
const repoConfig = require('./config-repo');

//----------------------------
// helper
//----------------------------
function hasTag(value) {
  return list([], { cwd: repoConfig.dir }).then(msg => (msg.stdout.indexOf(value) >= 0)).catch(console.log);
}

//----------------------------
// task
//----------------------------
const task = {
  create() {
    return hasTag(TAG_VALUE).then(bool => !bool && logAsync(create([TAG_VALUE], { cwd: repoConfig.dir })));
  },
  list() {
    return logAsync(list([], { cwd: repoConfig.dir }));
  },
  show() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(show([TAG_VALUE], { cwd: repoConfig.dir })));
  },
  delLocal() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(delLocal([TAG_VALUE], { cwd: repoConfig.dir })));
  },
  delRemote() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(delRemote([`:refs/tags/${TAG_VALUE}`], { cwd: repoConfig.dir })));
  },
  pushOne() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(pushOne([`${TAG_VALUE}`], { cwd: repoConfig.dir })));
  },
  pushAll() {
    return hasTag(TAG_VALUE).then(bool => bool && logAsync(pushAll([], { cwd: repoConfig.dir })));
  },
};

//----------------------------
// main
//----------------------------
FLOW.forEach(type => task[type] && task[type]());
