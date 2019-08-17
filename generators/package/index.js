const Generator = require('yeoman-generator');
function makeNpmRepoName(ctx) {
  let NPM_REPO_NAME = ctx.answers.name;
  const suffix = ctx.options.suffix;
  const author = ctx.answers.author;
  if (suffix) {
    NPM_REPO_NAME = `${NPM_REPO_NAME}-${suffix}`;
  } else {
    NPM_REPO_NAME = `${NPM_REPO_NAME}-${author}`;
  }
  return NPM_REPO_NAME;
}

// eslint-disable-next-line no-unused-vars
function makePackageAuthor(ctx) {
  const I_GITHUB_NAME = ctx.options.github_user;
  const author = ctx.answers.author;
  const email = ctx.options.github_user_email;
  return `${author} <${email}> (https://github.com/${I_GITHUB_NAME})`;
}
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This makes `suffix` a required argument.
    this.argument('suffix', { type: String, required: false });
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
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your github project name',
    },
    {
      type: 'input',
      name: 'author',
      message: 'The project author name',
      store: true
    }
    ]);
  }

  writing() {
    // write package.json
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: makeNpmRepoName(this),
        github_name: this.options.github_user,
        author: this.answers.author,
        email: this.options.github_user_email
      }
    );
  }
};
