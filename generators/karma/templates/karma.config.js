const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    // 哪些框架
    frameworks: ['mocha'],
    // 哪些文件
    files: [
      'test/**/*.spec.js'
    ],
    // 预处理器
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    // 报告格式
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    // 何浏览器
    browsers: ['Chrome'],
  });
};
