const Generator = require('yeoman-generator');
const makeLib = require('./make-lib');
function makeNpmRepoName(ctx) {
  let NPM_REPO_NAME = ctx.answers.name;
  const suffix = ctx.options.suffix;
  const author = ctx.answers.author;
  if (suffix) {
    NPM_REPO_NAME = `${NPM_REPO_NAME}-${author}`;
  } else {
    NPM_REPO_NAME = `${NPM_REPO_NAME}`;
  }
  return NPM_REPO_NAME;
}
function makeGitRepoName(ctx) {
  return ctx.answers.name;
}
function makeAnswerOption(name) {
  return {
    type: 'input',
    name,
    message: `use ${name}? yes(y) or no(n)`,
    store: true
  };
}
function makeData(obj, key, ctx) {
  // eslint-disable-next-line no-param-reassign
  obj[key] = ctx.answers[key].match(/^(y|Y)/);
}
// eslint-disable-next-line no-unused-vars
function makePackageAuthor(ctx) {
  const I_GITHUB_NAME = ctx.options.github_user;
  const author = ctx.answers.author;
  const email = ctx.options.github_user_email;
  return `${author} <${email}> (https://github.com/${I_GITHUB_NAME})`;
}
const feats = [
  'webpack',
  'webpack_handles_vue',
  'webpack_handles_css',
  'mocha',
  'chai',
  'karma',
  'commitlint',
  'eslint'
];
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This makes `suffix` a required argument.
    this.argument('suffix', { type: Boolean, required: false, default: true });
    // this.option('suffix'); // This method adds support for a `--suffix` flag
    // this.log(this.options.suffix);

    this.option('github_user', {
      type: String, desc: 'What is your github user', default: 'ymc-github', hide: false
    });
    this.option('github_user_email', {
      type: String, desc: 'What is your your email', default: 'ymc.github@gmail.com', hide: false
    });

    this.log(this.options.github_user);
  }

  paths() {
    this.sourceRoot();
    // returns './templates'
    this.templatePath('index.js');
    // returns './templates/index.js'
  }

  async prompting() {
    let promptOptions = [];
    promptOptions = promptOptions.concat(
      [{
        type: 'input',
        name: 'name',
        message: 'Your github project name',
      },
      {
        type: 'input',
        name: 'author',
        message: 'The project author name',
        store: true
      },
      {
        type: 'input',
        name: 'babel',
        message: 'use babel? yes(y) or no(n)',
        store: true
      }
      ]
    );
    feats.forEach((item) => {
      promptOptions.push(makeAnswerOption(item));
    });
    this.answers = await this.prompt(promptOptions);
    // 编码习惯：
    // 01.不喜欢超过三层的嵌套（通俗易懂|不复杂的）
    // 02.不喜欢太多的中间变量（如果起个“好”的名字让我很为难时）
    // 03.我喜欢用一些中间变量，代替多层嵌套（不得以而为之）
    // 04.相信不管是逆推或顺推，想到哪写到哪（做到前面几点后，思路不会断）
    // 05.对于那些转眼即逝变量，我可用纯函数消灭它。
  }

  writing() {
    const that = this;
    const data = {
      npm_name: makeNpmRepoName(this),
      github_user: this.options.github_user,
      github_repo_name: makeGitRepoName(this),
      author: this.answers.author,
      email: this.options.github_user_email,
      babel: this.answers.babel.match(/^(y|Y)/),
    };
    // @todo 如果此处数据计算很耗时，之后的操作会出错的！
    feats.forEach((item) => {
      makeData(data, item, that);
    });
    data.lib = makeLib(data);

    // write package.json
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      data
    );
  }
};
