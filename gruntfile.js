/*******************************************************************************
Use Grunt to process JavaScript and LESS files

Inspiration:
http://justinklemm.com/grunt-watch-livereload-javascript-less-sass-compilation/


How to use (if you already have nodejs and Grunt installed, skip to step 3):

1)  Install Node.js (with Node Package Manager/NPM) from
    http://nodejs.org/download/

2)  Install Grunt (globally):
    sudo npm install -g grunt-cli

3)  Open a terminal window, "cd" into the project folder and type:
    npm install

    This will install Node.js in the project folder; perform an initial
    compilation of the files that Grunt are monitoring; and start a Grunt watch
    task (which you can cancel by typing "ctrl c").

4)  If you cancel the Grunt watch task, you can restart it by typing:
    grunt watch

*******************************************************************************/

module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            style: {
                files: {
                    "compiled/css/grid.css": "less/grid.less" //Process the manifest "css/grid.less" and output to "compiled/css/grid.css"
                }
            }
        },
        watch: {
            css: {
                files: [
                    '**/*.less',
                    '**/*.css'
                ],
                tasks: ['less:style'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: [
                    '**/*.html'
                ],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: { livereload: true },
                files: [
                    '**/*.html'
                ]
            }
        }
    });


////////////////////////////////////////////////////////////////////////////////
//: Register tasks
////////////////////////////////////////////////////////////////////////////////

    // Init
    // Execute an initial compilation of the JavaScript and LESS/CSS files and
    // start a Grunt watch task.
    //
    // Used when executing an "npm install" e.g. from the terminal

    grunt.registerTask('init', [
        'less',
        'watch'
    ]);

    // Compile
    // Compile the LESS/CSS files
    grund.registerTask('compile', [
        'less'
    ]);

    // Watch
    // Compile the JavaScript and LESS/CSS files when saving the files and
    // livereload connected browsers

    grunt.registerTask('watch', [
        'watch'
    ]);


////////////////////////////////////////////////////////////////////////////////
//: Load dependencies
////////////////////////////////////////////////////////////////////////////////

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};