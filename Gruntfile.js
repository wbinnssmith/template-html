module.exports = function (grunt) {
  'use strict';

  var config = require('./build/configs')(grunt);
  config.pkg = grunt.file.readJSON('package.json');

  grunt.initConfig(config);
  grunt.loadTasks('build/tasks');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-karma');
};
