/* eslint-env mocha */
const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs-extra');


describe('generator:github', () => {
  const that = helpers.run(path.join(__dirname, '../generators/github'))
  // mock data
    .withOptions({ github_user: 'ymc-github' })
    .withArguments(['suffix'])
    .withPrompts({ name: 'select-license', author: 'yemiancheng' })
    .inTmpDir(function (dir) {
      // `dir` is the path to the new temporary directory
      const done = this.async();
      // write a file in fs-extra temp system
      fs.writeFileSync(
        path.join(dir, 'test.txt'),
        'hi , i am test'
      );
      // copy file in fs-extra temp system
      fs.copy(path.join(__dirname, '../generators/github/templates/license'), dir, done);
    });
  const fileName = `
package.json
.editorconfig
.eslintrc.js
.gitignore
babel.config.js
commitlint.config.js
license
.vscode/es6.code-snippets
.vscode/settings.json
build/change-log.js
build/configs.js
build/rollup.dev.config.js
build/rollup.pro.config.js
build/update-git-author.sh
tool/addOrigin.js
tool/babel.js
tool/console.js
tool/git.js
tool/gpg.js
tool/index.js
tool/listOrigin.js
tool/npm-set-registry.js
tool/npm.js
tool/projectDir.js
tool/push.js
tool/setOrigin.js
tool/shields.js
tool/showOrigin.js
tool/stash.js
tool/tag.js
tool/eslint/config-file.js
tool/eslint/index.js
test.txt
`;

  it('it has files:', () => {
    // that.then(function(){assert.file(['license','package.json'])});
    that.then(() => { assert.file(fileName.trim().split('\n').map(v => v.trim())); });
  });
  it('it has content:', () => {
    that.then(() => { assert.fileContent('test.txt', 'hi , i am test'); });
  });
});
