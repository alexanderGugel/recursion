// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  
  function search(element) {
    if (element.classList && element.classList.contains(className)) {
      results.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      search(element.childNodes[i]);
    }
  }
  
  search(document.body);
  return results;
};
