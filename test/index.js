import Intact from 'intact';

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
//Function.prototype.bind = require('function-bind');

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../components/', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

Intact.Vdt.configure('delimiters', ['{{', '}}']);
