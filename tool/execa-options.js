
module.exports = {
  // Kill the spawned process when the parent process exits unless either:
  // 01.the spawned process is detached;
  // 02.the parent process is terminated abruptly
  cleanup: false,

  // 喜爱局部安装的软件
  // Prefer locally installed binaries when looking for a binary to execute.
  preferLocal: false,
  // 局部安装的软件目录
  // Preferred path to find locally installed binaries in
  localDir: process.cwd(),

  // Current working directory of the child process.
  cwd: process.cwd(),
};
// https://github.com/sindresorhus/execa#options
