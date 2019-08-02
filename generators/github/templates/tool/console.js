function logAsync(fn) {
  // eslint-disable-next-line
  return fn.then(report => console.log(report.stdout)).catch(console.log);
}
module.exports = {
  logAsync
};
