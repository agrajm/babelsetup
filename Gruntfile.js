module.exports = function(grunt){
	'use strict';

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Initialize Grunt with tasks
	grunt.initConfig({
		'browserify': {
			dist: {
				options: {
					transform: [
						['babelify', {
							'presets': ['es2015']
						}]
					]
				},
				files: {
					'./build/app.js': ['./src/app.js']
				}
			}
		},
		watch: {
			scripts: {
				files: ['./src/*.js'],
        tasks: ['browserify']
			}
		}
	});

	grunt.registerTask('default', 'browserify');
	grunt.registerTask('build', 'watch');

}