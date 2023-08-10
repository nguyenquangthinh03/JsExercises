function outlier(arrInput){
    var odd = 0,
    even = 0;
  // check array odd or even ?
  for (var i = 0; i < 3; i++) {
    if (arrInput[i] % 2 === 0) {
      even += 1;
    } else odd += 1;
  }
  //array even
  if (even >= 2) {
    for (i = 0; i < arrInput.length; i++) {
      if (arrInput[i] % 2 !== 0) {
        console.log(arrInput[i]);
        break;
      }
    }
  }
  // array odd 
  else if (odd >= 2) {
    for (i = 0; i < arrInput.length; i++) {
      if (arrInput[i] % 2 === 0) {
        console.log(arrInput[i]);
        break;
      }
    }
  }
}
// Test case
outlier([1,2,3,5,6])
outlier([2,3,4,6,8,8,8,8,88,8,8,88,8,8,88,8,8,8])
