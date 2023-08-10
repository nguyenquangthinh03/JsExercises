function uppercase(stringInput){
  stringInput = stringInput.trim();
  var arr = stringInput.split('')
    for(var i = 0; i<arr.length; i++){
      if(i !== 0){
      checkFirstCharInWord = (arr[i] !== " " && arr[i-1] === " ")
      if(checkFirstCharInWord){
        arr[i] = arr[i].toUpperCase();
      }
      }
      else {
        checkFirstWordInArr = (i===0 && arr[i] !==" ")
        if(checkFirstWordInArr){
          arr[i] = arr[i].toUpperCase();
        }
      }

    }
    uppercaseWord = arr.join('');
    return uppercaseWord ;
}
// Test case
console.log(uppercase("aBc stringInputyz kkk"))
console.log(uppercase("          abstringInput kkk          "))