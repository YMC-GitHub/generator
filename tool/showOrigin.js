/* eslint-env node */
const { remote } = require('./git');
const { logAsync } = require('./console');
logAsync(remote(['show', 'origin']));
