/* eslint-env node */
const read = require('@commitlint/read');
const lint = require('@commitlint/lint');
const { rules } = require('../commitlint.config.js');
const { addFile, commit } = require('./git');

const fileListStr = `
.editorconfig
.eslintrc.js
.gitignore
.vscode/
babel.config.js
build/
commitlint.config.js
license
package.json
`;
const fileListArr = fileListStr.split('\n').map(v => v.trim()).filter(v => (v !== ''));
// console.log(fileListArr);
read({ edit: '.git/COMMIT_EDITMSG' })
  .then(content => lint(content[0], rules))
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
