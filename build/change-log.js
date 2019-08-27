const conventionalChangelog = require('conventional-changelog');
const fs = require('fs');
// v0.0.1
/*
console.log(conventionalChangelog({ preset: 'angular' }));
conventionalChangelog({ preset: 'angular' }).pipe(process.stdout);
*/

// v1.0.0
/*
const writableStream = fs.createWriteStream('CHANGELOG.md', { encoding: 'utf-8', flags: 'a+' });
conventionalChangelog({ preset: 'angular' }).pipe(writableStream);
*/
// 缓存旧的
const cache = fs.readFileSync('CHANGELOG.md');
/*
let data = '';
const readerStream = fs.createReadStream('CHANGELOG.md');
readerStream.on('data', (chunk) => {
  data += chunk;
});
readerStream.on('end', () => {
  console.log(data);
});
*/
// 获取新的
const newData = conventionalChangelog({ preset: 'angular' });

const result = fs.createWriteStream('CHANGELOG.md', { encoding: 'utf-8', flags: 'w' });
// 写入新的
newData.pipe(result);
// 写入旧的
result.on('finish', () => {
  // console.log('写入完成。');
  const a = fs.createWriteStream('CHANGELOG.md', { encoding: 'utf-8', flags: 'a' });
  a.write(cache);
});
