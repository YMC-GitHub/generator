/* eslint-env node */
const { diff } = require('./git');
const { logAsync } = require('./console');
const fileListArr = require('./config-file-list');

let result;
result = diff(fileListArr);

logAsync(result);
