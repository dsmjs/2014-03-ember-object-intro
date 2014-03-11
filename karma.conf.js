module.exports = function(karma) {
    karma.set({
        basePath: 'js',

        files: [
          "lib/deps.min.js"
        ],

        logLevel: karma.LOG_ERROR,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        frameworks: ['qunit', 'qunit-sb']
    });
};
