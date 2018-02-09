// NOT CORRECT
// NEEDS WORK

var conditionalSum = function(values, condition) {
  emptyArray = [];
  for (var i = 0; i < values.length; i++) {
    if (condition === 'even') {
      if (values[i] % 2 === 0) {
        emptyArray.push(values[i]);
        return emptyArray;
      }
    } else if (condition === 'odd') {
        if (values[i] % 2 === 1)
          emptyArray.push(values[i]);
          return emptyArray;
    } else {
      console.log('0');
    }
  }
}


console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));