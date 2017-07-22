//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/html5-boilerplate/dist/css/*.css',
      'bower_components/html5-boilerplate/dist/js/**/*.js',
      'components/**/*.js',
      'view*/**/*.js',
      'core/**/*.js',
      'index.html',
      'app.*.js',
      'app.css
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-nyan-reporter'
    ],

    reporters: ['nyan'],

    htmlReporter: {
      outputFile: 'tests/units.html'
    }

  });
};
