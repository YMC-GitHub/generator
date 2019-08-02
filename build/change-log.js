const conventionalChangelog = require('conventional-changelog');

// console.log(conventionalChangelog({preset: 'angular'}))
conventionalChangelog({ preset: 'angular' }).pipe(process.stdout);
