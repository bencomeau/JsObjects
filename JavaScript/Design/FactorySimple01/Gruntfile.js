module.exports = function(grunt) { 'use strict';

	var zipFile = 'FactorySimple01.zip';

	grunt.initConfig({
		zipFile: zipFile,
		
		jshint: {
			files: ['**/*.js'],

			options: {
				ignores: [
					'coverage/**',
					'**/node_modules/**',
					'**/Tests/Jasmine-2.0.0/**'
				],
				reporter: 'checkstyle',
				reporterOutput: 'result.xml',
				strict: true,
				newcap: false,
				globals: {
					describe: true,
					afterEach: true,
					beforeEach: true,
					inject: true,
					it: true,
					jasmine: true,
					expect: true,
					angular: true,
					module: true,
					Crafty: true
				}
			}
		},

		clean :	{
			work: {
				src : [ 
					"**/node_modules/**", 
				]
			},
			
			zip: {
				src: [  ]
			}
		},

		jasmine_node: {
			coverage: {
			},
			options: {
				forceExit: true,
				match: '.',
				matchall: false,
				extensions: 'js',
				specNameMatcher: 'Spec',
				captureExceptions: true,
				junitreport: {
					report: false,
					savePath : "./reports/jasmine/",
					useDotNotation: true,
					consolidate: true
				}
			}
		},

		compress: {
				FactorySimple01: {
					options: {
						archive: '<%= zipFile %>',
						mode: 'zip'
					},
					files: [
						{ src: './*.js*' },
						{ src: './Tests/**' },
						{ src: './LICENSE' },
						{ src: './README.md' }
					]
				}
			},

		copy: {
			main: {
				src: '<%= zipFile %>',
				dest: process.env.HOMEPATH + '/Aptana Rubles/ElfRuble/templates/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-jasmine-node-coverage');

	grunt.registerTask('dist', ['clean:zip', 'compress:angularCalculator', 'copy:main', 'jasmine', 'jasmine_node']);
	grunt.registerTask('check', ['jshint', 'jasmine_node']);
};