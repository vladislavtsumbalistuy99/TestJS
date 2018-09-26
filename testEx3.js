var mySingleton = (function(){ 
    
  var instance;

  return {
    getInstance: function () {
      if ( !instance ) {
        instance = {x:Math.random()};
      }
      return instance;
    }
  }
})();

var a = mySingleton.getInstance();
var b = mySingleton.getInstance();
var c = mySingleton.getInstance();
var d = mySingleton.getInstance();
  console.log(a===b); // true
  console.log(b===c); // true
  console.log(c===d); // true
  console.log(a===d); // true
