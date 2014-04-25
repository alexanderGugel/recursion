// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var brain = {
    null: 'null',
    true: 'true',
    false: 'false'
  };
  
  var results = [];
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] !== undefined && typeof obj[i] !== 'function') {
        results.push(stringifyJSON(obj[i]));        
      }
    }
    return '[' + results.join(',') + ']';
  } else if (obj === null || obj === true || obj === false) {
    return brain[obj];
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        results.push('"' + key + '":' + stringifyJSON(obj[key]) + '')        
      }
    }
    if (results.length === 1) {
      results = results.join('},{');
    }
    return '{' + results + '}'
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else {
    return '"' + obj + '"';
  }
};
