const fileListStr = `
tool/git-tag.js
tool/git-tag-flow.js
tool/config-file-list.js
tool/config-repo.js
tool/git-mv-config.js
tool/git-push.js
tool/git-remote.js
tool/git-set-remote-origin.js
tool/git-show-remote-origin.js
tool/git-tag.js
tool/npm-config-registry.js
tool/npm-init.js
tool/npm-list.js
tool/shields.js
`;
const fileListArr = fileListStr.split('\n').filter(v => (v.trim() !== ''));

module.exports = fileListArr;
