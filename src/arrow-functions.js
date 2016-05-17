// No need to wrap everything inside a IIFE to stop polluting global namespace
// Only things which are exported are available in other modules

// require dependencies just like in Node.js thanks to browserify. The dependency must be 
// present in package.json though
var $ = require('jquery');

// importing functionality from other es6 modules
import {generateMessage} from './generateMessages'

// example of arrow function 
$('button.starred').click( event => generateMessage('This is from Arrow Function '));

// Get log from the current Tab and log the output there