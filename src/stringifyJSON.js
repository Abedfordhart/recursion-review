// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null ) {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === undefined) {
    return undefined;
  }
  if (typeof obj === 'function') {
    return null;
  }
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
      } 	 	
    }
    return '[' + result + ']';
  }
  if (typeof obj === 'object') {
    var resultObject = [];
    if (Object.keys(obj).length === 0 || obj[Object.keys(obj)[0]] === undefined || typeof obj[Object.keys(obj)[0]] === 'function') {
      return '{}';
    } else {
      for (var key in obj) {
        resultObject.push([stringifyJSON(key)] + ':' + stringifyJSON(obj[key]));
      }
      return '{' + resultObject.join(',') + '}';
    }
  }
};
