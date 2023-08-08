function outlier(a){
    var odd = 0,
    even = 0;
  // check array odd or even ?
  for (var i = 0; i < 3; i++) {
    if (a[i] % 2 === 0) {
      even += 1;
    } else odd += 1;
  }
  //array even
  if (even >= 2) {
    for (i = 0; i < a.length; i++) {
      if (a[i] % 2 !== 0) {
        console.log(a[i]);
        break;
      }
    }
  }
  // array odd 
  else if (odd >= 2) {
    for (i = 0; i < a.length; i++) {
      if (a[i] % 2 === 0) {
        console.log(a[i]);
        break;
      }
    }
  }
}
