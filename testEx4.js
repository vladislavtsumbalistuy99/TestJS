  var myBind = function(fn, ctx/* , arg1, arg2 */) {
  return (function (prependedArgs) {
    return function bound () {
      var args = prependedArgs.concat(Array.prototype.slice.call(arguments, 0));
      return fn.apply(ctx, args);
    };
  })(Array.prototype.slice.call(arguments, 2));
  var user = "admin:";
  var log = {
      error: myBind(console, console.log, "[Error]", user),
      warning: myBind(console, console.log, "[Warning]", user)
  };
  log.error("File not found!"); // [Error] admin: File not found!
  log.warning("No timezone set!"); // [Warning] admin: No timezone set!

/*
var myBind = function(fn, ctx) {
    return function bound () {
        return fn.apply(ctx, arguments);
    };
}
var user = "admin:";
  var log = {
      error: myBind(console, console.log, "[Error]", user),
      warning: myBind(console, console.log, "[Warning]", user)
  };
  log.error("File not found!"); // [Error] admin: File not found!
  log.warning("No timezone set!"); // [Warning] admin: No timezone set!