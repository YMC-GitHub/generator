const conventionalChangelog = require('conventional-changelog');
const fs = require('fs');

// console.log(conventionalChangelog({ preset: 'angular' }));
// conventionalChangelog({ preset: 'angular' }).pipe(process.stdout);

const writableStream = fs.createWriteStream('CHANGELOG.md', 'utf-8');
conventionalChangelog({ preset: 'angular' }).pipe(writableStream);
// fs.writeFileSync('CHANGELOG.md', conventionalChangelog({ preset: 'angular' }));
/*
writableStream.once('open', () => {
  console.log('通道已经打开');
});
writableStream.once('error', (err) => {
  console.log(err);
});
writableStream.once('close', () => {
  console.log('通道已经关闭');
});
writableStream.write('我爱你，');
writableStream.write('我爱你，');
writableStream.write('我爱你，');

// 4\. 写入内容
writableStream.write(conventionalChangelog({ preset: 'angular' }));
*/
