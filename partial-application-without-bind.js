var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    //var array = [namespace, message];
    //console.log(message);
    var params = Array.from(arguments);
    params.unshift(namespace);
    console.log.apply(null, params);
  }
}

module.exports = logger
