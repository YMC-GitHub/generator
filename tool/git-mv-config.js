const SRC = 'tool/tag.js';
const DES = 'tool/git-tag.js';
// 强制模式
// Force renaming or moving of a file even if the target exists
const FORCE = '--force';

// 实验模式
// Do nothing; only show what would happen
const DRY_RUN = '--dry-run';

// 输出模式
// Report the names of files as they are moved.
const VERBOSE = '--verbose';

// master
const toCmdArgForExeca = () => [SRC, DES];
module.exports = {
  SRC,
  DES,
  FORCE,
  DRY_RUN,
  VERBOSE,
  toCmdArgForExeca,
};
