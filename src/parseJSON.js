// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
 
  if (json.charAt(0) === '[') {
    var jsonArray = json.split(',');
    return jsonArray;
  }
  if (json.charAt(0) === '{') {


  }
};

