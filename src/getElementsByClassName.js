// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var searchFor = function (element, className) {
    var results = [];
    var childs = element.childNodes;
    
    for (var i = 0; i < childs.length; i++) {
      if (childs[i].classList.indexOf(className) !== -1) {
        results.push(childs[i]);
      }
      results = results.concat(searchFor(childs[i], className));
    }
    
    return results;
  }
  
  return searchFor(document.body, className);
};
