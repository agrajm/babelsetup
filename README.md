# babelsetup
Testing es6 waters with Babel, Browserify & Grunt

* Babel - Transpiler that converts ES6 code to ES5 
* Browserify - lets us 'require' modules in browser by bundling up all the dependencies 

Plugins used
* grunt-browserify - Grunt task for Browserify 
* babelify - Babel transformer specificaly made for Browserify
* grunt-contrib-watch - to watch for any changes


Currently all the modules are compiled into one build file, but that can be changed using factor-bundle plugin with Browserify

