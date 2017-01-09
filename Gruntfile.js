
module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat']
            }
        },
        sass: {
            options: {
                sourceMap: true,
                includePaths: ['bower_components/foundation-sites/scss/']
            },
            dist: {
                files: {
                    'public/css/app.css': 'scss/app.scss'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/foundation-sites/dist/js/foundation.js',
                    'js/*.js'
                ],
                dest: 'public/js/app.js'
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('assets', ['sass', 'concat']);
    grunt.registerTask('default', ['assets']);
};
