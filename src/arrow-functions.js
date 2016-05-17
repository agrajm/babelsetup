// this === window

var $ = require('jquery');
import {generateMessage} from './generateMessages'

$('button.starred').click( event => generateMessage('This is from Arrow Function '));
