module.exports = function(grunt){
	'use strict';

	grunt.loadNpmTasks('grunt-babel');

	grunt.initConfig({
		'babel': {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'build/app.js': 'src/app.js'
				}
			}
		}
	});

	grunt.registerTask('default', 'babel');

}