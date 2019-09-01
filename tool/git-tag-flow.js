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
// 顺序执行：有一组任务，任务的调用按某种顺序进行。
// 乱序执行：有一组任务，任务的调用顺序是不固定的
// 顺序执行并不等于继发！
// 继发执行：有一组任务，上一个任务调用执行结束后，再进行调用下一个。
let chain = Promise.resolve(null);
FLOW.forEach((type) => {
  if (task[type]) {
    chain = chain.then(v => task[type]());
  }
});
