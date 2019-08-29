'use strict';

/**
 * Inspired by https://github.com/stephenplusplus/grunt-wiredep
 * Similar kind of task; only for npm dependencies. Helps when you
 * want to convert your bower dependent project into a npm one.
 * @param {*} grunt
 */
function npmWiredep(grunt) {
  grunt.registerMultiTask('npmWiredep', 'Inject npm packages into your source code', function () {
    this.requiresConfig(['npm-wiredep', this.target, 'src']);

    var options = this.options(this.data);
    require('npm-wiredep')(options);
  });
}

module.exports = npmWiredep;
