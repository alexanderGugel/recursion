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

console.log(stringifyJSON([
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[],3,4]],
  [[[["foo"]]]],
  {},
  {"a": "apple"},
  {"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
  // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
]));


console.log(JSON.stringify([
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[],3,4]],
  [[[["foo"]]]],
  {},
  {"a": "apple"},
  {"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
  // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
]));

