function formatWhitespace(arr) {
  for (let i = 0; i < arr.length; i++) {
      //Check elements is whitespaces?
      // if true convert element into 1 whitespace
      if (typeof arr[i] === 'string' && arr[i].trim().length === 0 && arr[i].length !== 0) {
          arr[i] = " ";
      }
  }
  return arr;
}
function similar(arr1, arr2){
  arrResult = []
  // format whitespace
  formatWhitespace(arr1)
  formatWhitespace(arr2)
  arr1.filter(element => {
      // same element
      elementInArr2 = arr2.includes(element) 
      elementNotInArrResult = !arrResult.includes(element)
      if(elementInArr2 && elementNotInArrResult){
          arrResult.push(element)
      }
  })
  return JSON.stringify(arrResult.sort())
}
function diff(arr1, arr2){
  arrResult = []
   // format whitespace
  formatWhitespace(arr1)
  formatWhitespace(arr2)
  // find diff from 2 arr
  arr2.filter(element => {
      // diff element
      elementNotInArr2 = !arr1.includes(element) 
      elementInArrResult = !arrResult.includes(element)
      if(elementNotInArr2  && elementInArrResult){
          arrResult.push(element)
      }
  })
  arr1.filter(element => {
      //diff element
      elementNotInArr1 = !arr2.includes(element) 
      elementInArrResult = !arrResult.includes(element)
      if(elementNotInArr1 && elementInArrResult){
          arrResult.push(element)
      }
  })
  return JSON.stringify(arrResult.sort())
}
// Test case
// console.log(similar(["bbc", "abc", " bbc", "", " ", 1, "2", "  2"], ["bbc","abc", " abc", "        ", 1, 2]))
// console.log(diff(["bbc", "abc"," bbc", "", " ", 1, "2", "  2"], ["bbc","abc", " abc", "        ", 1, 2]))
// console.log(similar([], [""]))
// console.log(diff([], [""]))



//ex2
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
    return JSON.stringify(uppercaseWord) ;
}
// Test case
// console.log(uppercase("aBc stringInputyz kkk"))
// console.log(uppercase("          abstringInput kkk          "))

// ex3
function sum(arrInput){
  var sum = 0
   if(arrInput == null) sum = 0
   else{
     for(var i=0; i<arrInput.length; i++)
     {
      sum = arrInput[i] + sum
     }
   }
   if(sum % 2 == 0) result = "even"
   else result = "odd"
   return JSON.stringify(result)
 }
// Test case
// console.log(sum([-1, -2, 2 ,3]))
// console.log(sum([0,1,-2]))
// console.log(sum([]))
// ex4
function lots_of_math(firstNum,secondNum,thirdNum,fourthNum){
  let result = {}
  result.sum = firstNum + secondNum
  result.minus = thirdNum - fourthNum
  result.productOfSumAndMinus = (firstNum+secondNum) * (thirdNum-fourthNum)
  result.modulo = result.productOfSumAndMinus % firstNum
  return JSON.stringify(result)
}
// Test case
// console.log(lots_of_math(1,2,3,4))
// console.log(lots_of_math(0,-2,3,-4))

 // ex5 
 function getMiddle(stringInput){
  var result
  var  middleChar = Math.round(stringInput.length / 2)
  if(stringInput.length % 2 == 0){
      result = stringInput[middleChar -1] + stringInput[middleChar]
  }
  else{
      result = stringInput[middleChar-1]
  }
  return JSON.stringify(result)
}
// Test case
// console.log(getMiddle("test"))
// console.log(getMiddle("   test"))
// console.log(getMiddle("test       "))
// console.log(getMiddle(""))
// console.log(getMiddle(" "))

// ex6
function descendingOrder(number){
  var digit = number.split('');
  digit.sort(function(a,b){return b-a});
  number = digit.join('')
  return JSON.stringify(number*1); // convert to number
}
// Test case
// console.log(descendingOrder("123"))
// console.log(descendingOrder("0001203"))
//ex7
function unique_in_order(stringInput){
  var arr = []
  var i = 0
  while(i < stringInput.length){
      //check similiar
      while(stringInput[i] == stringInput[i+1]){
          i++
      }
      arr.push(stringInput[i])
      // not similiar
      i++;
  }
  return JSON.stringify(arr)
}
// Test case
// console.log(unique_in_order("aaaaaaa          bbbbbbbbb aaaaaaaaaaaaaAAAAAAAAAAA1111112222222       "))

//ex8
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
      return JSON.stringify(arrInput[i]);
    }
  }
}
// array odd 
else if (odd >= 2) {
  for (i = 0; i < arrInput.length; i++) {
    if (arrInput[i] % 2 === 0) {
      return JSON.stringify(arrInput[i]);
    }
  }
}
}
// Test case
// console.log(outlier([1,2,3,5,6]))
// console.log(outlier([2,3,4,6,8,8,8,8,88,8,8,88,8,8,88,8,8,8]))




