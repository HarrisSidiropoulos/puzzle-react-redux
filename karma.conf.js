const webpackEnv = {test:true}
const webpackConfig = require('./webpack.config.js')(webpackEnv)
const testGlob = 'src/js/**/*.test.js'
const srcGlob = 'src/js/**/*!(test|stub).js'
process.env.BABEL_ENV = 'test'
module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    exclude: ['src/js/*.js'],
    files: [testGlob,srcGlob],
    preprocessors: {
      [testGlob]: ['webpack'],
      [srcGlob]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo:true},
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
