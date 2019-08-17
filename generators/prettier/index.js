const Generator = require('yeoman-generator');
/**
 * copy for-short
 * @param {string} name file to copy
 * @param {object} ctx context
 */
function copyFiles(name, ctx) {
  ctx.fs.copy(
    ctx.templatePath(name),
    ctx.destinationPath(name)
  );
}
module.exports = class extends Generator {
  // eslint-disable-next-line
  constructor(args, opts) {
    super(args, opts);
  }

  paths() {
    this.sourceRoot();
    // returns './templates'
    this.templatePath('index.js');
    // returns './templates/index.js'
  }

  async prompting() {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'use prettier file(yes/no)?',
    }
    ]);
  }

  writing() {
    const that = this;
    if (this.answers.name === 'yes') copyFiles('prettier.config.js', that);
  }
};
