// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  'use strict';
  
  var results = [];
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] !== undefined && typeof obj[i] !== 'function') {
        results.push(stringifyJSON(obj[i]));        
      }
    }
    return '[' + results.join(',') + ']';
  } else if (obj === null) {
    // This order is important!
    // typeof null #=> 'object'
    return 'null';
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        results.push('"' + key + '":' + stringifyJSON(obj[key]) + '');
      }
    }
    return '{' + results + '}';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else {
    // true, false, numbers
    return obj.toString();
  }
};
