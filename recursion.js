function reduce(arr, fn, initial) {
  if (arr.length === 0) {
    return;
  }
  fn(initial, arr[0]);
  array.shift();
  reduce(array, fn, initial);
}

module.exports = reduce
