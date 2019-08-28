const { mv } = require('./git');
const { logAsync } = require('./console');
const repoConfig = require('./config-repo');
const { SRC, DES, FORCE } = require('./git-mv-config');

let result;
result = mv([FORCE, SRC, DES], { cwd: repoConfig.dir });
logAsync(result);
