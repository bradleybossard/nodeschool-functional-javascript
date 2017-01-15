function duckCount() {
  return Array.from(arguments).reduce(function(count, arg) {
    count = arg.quack ? count + 1 : count;
    return count;
  }, 0); 
}

module.exports = duckCount
