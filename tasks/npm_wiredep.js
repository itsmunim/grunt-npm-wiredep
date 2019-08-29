'use strict';

/**
 * Inspired by https://github.com/stephenplusplus/grunt-wiredep
 * Similar kind of task; only for npm dependencies. Helps when you
 * want to convert your bower dependent project into a npm one.
 * @param {*} grunt
 */
function wiredep(grunt) {
  grunt.registerMultiTask('wiredep', 'Inject npm packages into your source code', function () {
    this.requiresConfig(['wiredep', this.target, 'src']);

    var options = this.options(this.data);
    require('wiredep')(options);
  });
}

module.exports = wiredep;
