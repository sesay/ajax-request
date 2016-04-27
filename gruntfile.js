'use strict';

module.exports = function(grunt) {
  //load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-wiredep');

  //compress JS files
  grunt.initConfig({
    wiredep: {
     task: {
       src: 'index.html' // point to your HTML file.
     }
   },
    uglify: {
      my_target: {
        files: {
          '_/js/scripts.js' : ['_/components/js/scripts.js']
        } // files
      } //my_target
    }, // uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    }, // compass
    watch: {
      options: { livereload: true},
      scripts: {
        files: ['_/components/js/*.js'],
        tasks:['uglify']
      }, //scripts
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    } // watch

  }) //initConfig
  grunt.registerTask('default','watch');
} //exports
