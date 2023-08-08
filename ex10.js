// ex1
function formatWhitespace(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string' && arr[i].trim().length === 0 && arr[i].length !== 0) {
          arr[i] = " ";
      }
  }
  return arr;
}
function similar(arr1, arr2){
  arr3 = []
  // format whitespace
  formatWhitespace(arr1)
  formatWhitespace(arr2)
  arr1.filter(element => {
      // same element
      if(arr2.includes(element) && arr3.includes(element) === false){
          arr3.push(element)
      }
  })
  return JSON.stringify(arr3.sort())
}
function diff(arr1, arr2){
  arr3 = []
   // format whitespace
  formatWhitespace(arr1)
  formatWhitespace(arr2)
  // find diff from 2 arr
  arr1.filter(element => {

      // diff element
      if(arr2.includes(element) === false && arr3.includes(element) === false){
          arr3.push(element)
      }
  })
  arr2.filter(element => {

      //diff element
      if(arr1.includes(element) === false && arr3.includes(element) === false){
          arr3.push(element)
      }
  })
  return JSON.stringify(arr3.sort())
}
//ex2
function uppercase(x){
    var arr = x.split('')
      for(var i = 0; i<arr.length; i++){
        if((arr[i] !== " " && arr[i-1] === " ") || (i===0 && arr[i] !==" ")){
          arr[i] = arr[i].toUpperCase();
        }
      }
      x = arr.join('');
      return JSON.stringify(x.trim());
  }
// ex3
function sum(x){
    var a = x
    var sum = 0
    if(a == null) sum = 0
    else{
      for(var i=0; i<a.length; i++)
      {
       sum = a[i] + sum
      }
    }
    if(sum % 2 == 0) result = "even";
    else result = "odd";
    return JSON.stringify(result)
  }
// ex4
function lots_of_math(a,b,c,d){
  result = {}
    console.log(a+b)
    result.sum = a+b
    console.log(c-d)
    result.minus = c-d
    var x = (a+b) * (c-d)
    console.log(x)
    result.product = x
    result.modulo = x % a
    return JSON.stringify(result)
  }

 // ex5 
  function getMiddle(s){
    var  m = Math.round(s.length / 2)
    if(s.length % 2 == 0){
       result = s[m -1] + s[m]
    }
    else{
        result = s[m-1]
    }
    return JSON.stringify(result)
}

// ex6
function descendingOrder(number){
    number = number.toString();
    var digit = number.split('');
    digit.sort(function(a,b){return b-a});
    number = digit.join('')
    return JSON.stringify(number);
}
//ex7
function unique_in_order(s){
    var a = []
    var i = 0
    while(i < s.length){
        while(s[i] === s[i+1]){
            i++
        }
        a.push(s[i])
        i++;
    }
    return JSON.stringify(a)
}

//ex8
function outlier(a){
    var odd = 0,
    even = 0;
    var result;
  for (var i = 0; i < 3; i++) {
    if (a[i] % 2 === 0) {
      even += 1;
    } else odd += 1;
  }
  if (even >= 2) {
    for (i = 0; i < a.length; i++) {
      if (a[i] % 2 !== 0) {
        result = a[i];
        break;
      }
    }
  } else if (odd >= 2) {
    for (i = 0; i < a.length; i++) {
      if (a[i] % 2 === 0) {
        result = a[i];
        break;
      }
    }
  }
  return JSON.stringify(result)
}




