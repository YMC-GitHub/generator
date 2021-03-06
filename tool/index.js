/* eslint-env node */
const read = require('@commitlint/read');
const load = require('@commitlint/load');
const lint = require('@commitlint/lint');
const addFile = require('./git-add');
const commit = require('./git-commit');


const CONFIG = require('../commitlint.config.js');
const fileListArr = require('./config-file-list');

Promise.all([read({ edit: '.git/COMMIT_EDITMSG' }), load(CONFIG)])
  .then((res) => {
    const [content, opts] = res;
    // eslint-disable-next-line max-len
    return lint(content[0], opts.rules, opts.parserPreset ? { parserOpts: opts.parserPreset.parserOpts } : {});
  })
  .then((result) => {
    if (result.valid) {
      return addFile(fileListArr).then(() => commit(result.input));
    }
    // eslint-disable-next-line
    console.log(result);
    return result;
  })
  // eslint-disable-next-line
  .then(report => console.log(report.stdout))
  // eslint-disable-next-line
  .catch(console.log);
