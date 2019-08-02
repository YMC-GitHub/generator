/* eslint-disable max-len */
/* eslint-env node */
const getRuleFinder = require('eslint-find-rules');
const fs = require('fs');
const util = require('util');
const path = require('path');
const { write } = require('./config-file.js');

const docs = require('../../data/rules-doc.json');
const rulesToUpdate = require('../../data/rules-to-update.js');
const dataDescObj = require('../../data/rule-best-practices-desc.js');

const APP_STAGE = 'production';
const APP_RUNTIME_MODE = [''];// debug
const COMMIT_MSG_TYPE = 'feat';
const COMMIT_MSG_SCOPE = 'imports';
const COMMIT_MSG_SUBJECT = 'rules relate to imports';
const COMMIT_MSG_FILE = './.git/COMMIT_EDITMSG';
const COMMIT_RULE_VALUE_SCOPE = 'to-update-rule';// all-rule|old-rule|new-rule|to-update-rule
// const COMMIT_RULE_DESC_TYPE = 'desc';// rule-name|rule-desc|
const COMMIT_MSG_LOOP_USE = 'rule-value';// rule-value|rule-desc
const fileList = [];
const aRuleIDStr = 'import/no-extraneous-dependencies';
const ESLINT_CONFIG_ENTRY_FOR_PRO = '.eslintrc.js';
const ESLINT_CONFIG_INDEX_FOR_PRO = './index.js';
const DEV_WORK_DIR = './temp';
const PRO_WORK_DIR = './';
const RULE_DIR = `${DEV_WORK_DIR}/rules`;
const DEBUG_DIR = `${DEV_WORK_DIR}/debug`;
const DATA_DIR = `${DEV_WORK_DIR}/data`;
const ESLINT_CONFIG_ENTRY_FOR_DEV = `${DEV_WORK_DIR}/.eslintrc.js`;
const ESLINT_CONFIG_INDEX_FOR_DEV = `${DEV_WORK_DIR}/index.js`;
const DEBUG_FILES = [];

/**
 * create dir - sync
 * @param {String} dirname the dir to mkdir
 * @returns {Boolean} false/true,whether the dirname exists or not
 */
const mkdirsSync = function (dirname) {
  if (fs.existsSync(dirname)) return true;
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
  return false;
};
const iniWorkDiretory = function () {
  // make work dirs
  mkdirsSync(DEV_WORK_DIR);
  mkdirsSync(RULE_DIR);
  mkdirsSync(DEBUG_DIR);
  mkdirsSync(DATA_DIR);
  // make work files
  const eslintConfEntryFileDataForPro = fs.readFileSync(ESLINT_CONFIG_ENTRY_FOR_PRO);
  fs.writeFileSync(ESLINT_CONFIG_ENTRY_FOR_DEV, eslintConfEntryFileDataForPro, 'utf8');
  const eslintConfIndexFileDataForPro = fs.readFileSync(ESLINT_CONFIG_INDEX_FOR_PRO);
  fs.writeFileSync(ESLINT_CONFIG_INDEX_FOR_DEV, eslintConfIndexFileDataForPro, 'utf8');
};
// steps-01
iniWorkDiretory();

const getRulesCategory = function () {
  const result = [];
  Object.keys(docs).forEach(
    (v) => {
      const { category = '' } = docs[v];
      if (!result.includes(category)) {
        result.push(category);
      }
    }
  );
  return result;
};
// steps-02
const ruleCategoryArr = getRulesCategory();
if (APP_RUNTIME_MODE.includes('debug')) {
  write(ruleCategoryArr, `${DEBUG_DIR}/get-rule-category-list.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/get-rule-category-list.json`);

const CATEGORY_FILES_MACTH = {
  'Best Practices': 'best-practices',
  'Stylistic Issues': 'style',
  'ECMAScript 6': 'es6',
  'Node.js and CommonJS': 'node',
  'Possible Errors': 'errors',
  Variables: 'variables',
  'Strict Mode': 'strict',
  imports: 'imports'
};
// steps-03
if (APP_RUNTIME_MODE.includes('debug')) {
  write(CATEGORY_FILES_MACTH, `${DEBUG_DIR}/rules-category-key-value-pair.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/rules-category-key-value-pair.json`);

// steps-04
const old = getRuleFinder(ESLINT_CONFIG_ENTRY_FOR_PRO);
const oldCurrentRulesDetailObj = old.getCurrentRulesDetailed();
if (APP_RUNTIME_MODE.includes('debug')) {
  write(oldCurrentRulesDetailObj, `${DEBUG_DIR}/old-current-rules-detail-obj.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/old-current-rules-detail-obj.json`);

const simpleCloneObj = function (...opts) {
  const arr = opts;
  const result = {};
  arr.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        result[key] = obj[key];
      }
    });
  });
  return result;
};
const updateRules = function (oldRules, newRules) {
  if (!newRules) return oldRules;
  return simpleCloneObj(oldRules, newRules);
};
// steps-05
const newCurrentRulesDetailObj = updateRules(oldCurrentRulesDetailObj, rulesToUpdate);
if (APP_RUNTIME_MODE.includes('debug')) {
  write(newCurrentRulesDetailObj, `${DEBUG_DIR}/new-current-rules-details.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/new-current-rules-details.json`);

const getRuleById = function ({ rules, id }) {
  return rules[id];
};
const getOldNewRuleObjByRuleId = function ({ RuleId }) {
  const o = getRuleById({ rules: oldCurrentRulesDetailObj, id: RuleId });
  const n = getRuleById({ rules: newCurrentRulesDetailObj, id: RuleId });
  return { id: RuleId, o, n };
};
// steps-06
const onRules = Object.keys(rulesToUpdate).map(value => getOldNewRuleObjByRuleId({ RuleId: value }));
const aRule = getRuleById({ rules: oldCurrentRulesDetailObj, id: aRuleIDStr });
if (APP_RUNTIME_MODE.includes('debug')) {
  write(onRules, `${DEBUG_DIR}/get-old-new-rule-obj-by-rule-id.json`);
  write(aRule, `${DEBUG_DIR}/get-rule-by-id.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/get-old-new-rule-obj-by-rule-id.json`);
DEBUG_FILES.push(`${DEBUG_DIR}/get-rule-by-id.json`);

const data = {};
Object.keys(newCurrentRulesDetailObj).forEach((key) => {
  if (!docs[key] && key.split('/')[0] === 'import') {
    const name = 'imports';
    data[name] = data[name] || {};
    data[name][key] = newCurrentRulesDetailObj[key];
  }

  if (docs[key]) {
    const { category = {} } = docs[key];
    const name = `${CATEGORY_FILES_MACTH[category]}`;
    data[name] = data[name] || {};
    data[name][key] = newCurrentRulesDetailObj[key];
  } else {
    // console.log(key);
  }
});
// steps-07
if (APP_RUNTIME_MODE.includes('debug')) {
  write(data, `${DEBUG_DIR}/next-current-rules-detail-obj.json`);
}
fileList.push(`${DEBUG_DIR}/next-current-rules-detail-obj.json`);
const parserES6Options = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    generators: false,
    objectLiteralDuplicateProperties: false,
  }
};
const importOptions = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
};


const writeOneRule = function ({ type }) {
  const name = CATEGORY_FILES_MACTH[type];
  const rules = data[name];
  let result = {};
  if (['node', 'es6'].includes(name)) {
    result.env = result.env || {};
    result.env[name] = true;
  }
  if (['es6'].includes(name)) {
    result.parserOptions = parserES6Options;
  }
  if (['imports'].includes(name)) {
    result = importOptions;
  }
  result.rules = rules;
  write(result, `${RULE_DIR}/${name}.js`);
};
const writeRules = function () {
  return Object.keys(CATEGORY_FILES_MACTH).forEach(type => writeOneRule({ type }));
};
// steps-08
writeRules();

//-------------
// LINT
//-------------
// ./node_modules/.bin/eslint-find-rules --unused
// ./node_modules/.bin/eslint --report-unused-disable-directives .
// ./node_modules/.bin/eslint --fix --report-unused-disable-directives .

//-------------
// test
//-------------
// node ./test/es6Entry.js

//-------------
// Format
//-------------

//-------------
// commit
//-------------
const getRuleDescListByCategory = function ({ docs: ruleDescData, category }) {
  const resuLt = {};
  Object.keys(ruleDescData).forEach(
    (v) => {
      const { description = '' } = ruleDescData[v];
      if (!resuLt[v] && ruleDescData[v].category === category) {
        resuLt[v] = description;
      }
    }
  );
  return resuLt;
};
const getDescFile = function ({ type }) {
  const name = `rule-${CATEGORY_FILES_MACTH[type]}-desc`;
  return `${DATA_DIR}/${name}.js`;
};
const getDescFiles = function () {
  return Object.keys(CATEGORY_FILES_MACTH).map(value => getDescFile({ type: value }));
};
const writeOneDesc = function ({ mode, type }) {
  const url = getDescFile({ mode, type });
  write(getRuleDescListByCategory({ docs, category: type }), url);
};
const writeDescs = function ({ mode }) {
  return Object.keys(CATEGORY_FILES_MACTH).forEach(type => writeOneDesc({ type, mode }));
};
// steps-09
writeDescs({ mode: APP_STAGE });

/*
// the file './data/rule-error-desc.txt' may be generated by git log
const errorDescBuffer = fs.readFileSync('./data/rule-error-desc.txt');
const errorDescArr = errorDescBuffer.toString().trim().split('\n');
const getErrorDescObt = function (descSet, arr) {
  const commitSet = {};
  const length = arr.length;

  let i = 0;
  Object.keys(descSet).forEach(
    (val) => {
      if (i > length) i = length;
      commitSet[val] = arr[i];
      i += 1;
    }
  );
  return commitSet;
};
const errorDescObj = getErrorDescObt(errorDescSet, errorDescArr);
write(errorDescObj, './data/rule-error-desc.js');
*/

const getLoopObj = function ({ desc, value }) {
  let obj;
  if (COMMIT_MSG_LOOP_USE === 'rule-desc') {
    obj = desc;
  } else if (COMMIT_MSG_LOOP_USE === 'rule-value') {
    obj = value;
  }
  return obj;
};
const getCommitMsgBodyArr = function ({ ruleDesc, ruleValue }) {
  const obj = getLoopObj({ desc: ruleDesc, value: ruleValue });
  return Object.keys(obj).map((v) => {
    let value = '';
    let result = '';
    let desc = '';
    if (util.isArray(ruleValue[v])) {
      value = ruleValue[v][0];
    } else if (ruleValue[v]) {
      value = ruleValue[v];
    }
    if (value === 'error') {
      result = 'use `error`.';
    } else if (value === 'warn') {
      result = 'use `warn`.';
    } else if (value === 'off') {
      result = 'use `off`.';
    }
    // set rule desc value in commit msg
    if (ruleDesc[v]) {
      desc = ruleDesc[v];
    } else {
      desc = v;
    }
    result += ` ${desc}`;
    return result;
  });
};
// steps-10
let commitMsgBodyArr;
if (COMMIT_RULE_VALUE_SCOPE === 'old-rule') {
  commitMsgBodyArr = getCommitMsgBodyArr({ ruleDesc: dataDescObj, ruleValue: oldCurrentRulesDetailObj });
} else if (COMMIT_RULE_VALUE_SCOPE === 'new-rule') {
  commitMsgBodyArr = getCommitMsgBodyArr({ ruleDesc: dataDescObj, ruleValue: newCurrentRulesDetailObj });
} else if (COMMIT_RULE_VALUE_SCOPE === 'to-update-rule') {
  commitMsgBodyArr = getCommitMsgBodyArr({ ruleDesc: dataDescObj, ruleValue: rulesToUpdate });
}
if (APP_RUNTIME_MODE.includes('debug')) {
  write(commitMsgBodyArr, './temp/commit-msg-body-arr.json');
}
fileList.push('./temp/commit-msg-body-arr.json');
const commitMsgBodyStr = commitMsgBodyArr.join('\n  ').trim();
const getCommitMsgHeaderStr = function (opts) {
  const defaultOpts = {
    type: 'feat',
    scope: '',
    subject: 'adding probale error'
  };
  Object.keys(defaultOpts).forEach((key) => {
    if (opts && opts[key]) {
      defaultOpts[key] = opts[key];
    }
  });
  // eslint-disable-next-line prefer-const
  let { type, scope, subject } = defaultOpts;
  const cache = scope.trim();
  if (cache) {
    scope = `(${cache})`;
  }
  return `${type}${scope}: ${subject}`;
};
// steps-11
const commitMsgHeaderStr = getCommitMsgHeaderStr({ type: COMMIT_MSG_TYPE, scope: COMMIT_MSG_SCOPE, subject: COMMIT_MSG_SUBJECT });
const commitMsgStr = `${commitMsgHeaderStr}\n\r  ${commitMsgBodyStr}`;
fs.writeFileSync(COMMIT_MSG_FILE, commitMsgStr, 'utf-8');

const getSimpleCommitMsgArr = function (comlpexCommitMsgStr) {
  const commitMsgArr = comlpexCommitMsgStr.trim().split('\n\r');
  const middle = commitMsgArr[1].split('\n').map(v => v.trim());
  const DELETE_STR = ['use `error`.', 'use `warn`.', 'use `off`.'];
  return middle.map((v) => {
    let result = v;
    let done = false;
    if (done) return result;
    for (let i = 0, len = DELETE_STR.length; i < len; i += 1) {
      const str = DELETE_STR[i];
      if (v.indexOf(str) > -1) {
        result = v.replace(str, '').trim();
        done = true;
        break;
      }
    }
    return result;
  });
};
// steps-12
const simpleCommitMsgArr = getSimpleCommitMsgArr(commitMsgStr);
if (APP_RUNTIME_MODE.includes('debug')) {
  write(simpleCommitMsgArr, `${DEBUG_DIR}/get-simple-commit-msg-arr.json`);
}
DEBUG_FILES.push(`${DEBUG_DIR}/get-simple-commit-msg-arr.json`);

//-------------
// clear
//-------------
const deleteFile = function (url) {
  return fs.existsSync(url) && fs.unlinkSync(url);
};
const getRuleConfFiles = function () {
  return Object.keys(CATEGORY_FILES_MACTH).map((type) => {
    const name = CATEGORY_FILES_MACTH[type];
    return `${RULE_DIR}/${name}.js`;
  });
};
const moveFilesForPro = function () {
  if (APP_STAGE === 'production') {
    const filesToMove = [];
    // save rules files
    getRuleConfFiles().forEach((name) => {
      filesToMove.push({ from: name, to: name.replace(DEV_WORK_DIR, PRO_WORK_DIR) });
    });
    filesToMove.forEach((v) => {
      const { from, to } = v;
      fs.writeFileSync(to, fs.readFileSync(from), 'utf-8');
    });
  }
};


const deleteWorkDiretory = function () {
  if (APP_STAGE === 'production') {
    // make work files
    deleteFile(ESLINT_CONFIG_ENTRY_FOR_DEV);
    deleteFile(ESLINT_CONFIG_INDEX_FOR_DEV);
    // make work dirs
    fs.rmdirSync(RULE_DIR);
    fs.rmdirSync(DEBUG_DIR);
    fs.rmdirSync(DATA_DIR);
    fs.rmdirSync(DEV_WORK_DIR);
  }
};

const deleteTemp = function () {
  let arr = [];
  // delete debug files
  if (!APP_RUNTIME_MODE.includes('debug')) {
    arr = [...arr, ...fileList, ...DEBUG_FILES];
  }
  // delete rules files and data files only when pro
  if (APP_STAGE === 'production') {
    arr = [...arr, ...fileList, ...DEBUG_FILES, ...getRuleConfFiles({ mode: APP_STAGE }), ...getDescFiles()];
  }
  return arr.map(element => deleteFile(element));
};
moveFilesForPro();
deleteTemp();
deleteWorkDiretory();
