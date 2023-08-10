function lots_of_math(firstNum,secondNum,thirdNum,fourthNum){
    sum = firstNum + secondNum
    console.log(sum)
    minus = thirdNum - fourthNum
    console.log(minus)
    productOfSumAndMinus = (firstNum+secondNum) * (thirdNum-fourthNum)
    console.log(productOfSumAndMinus)
    return productOfSumAndMinus % firstNum
  }
// Test case
console.log(lots_of_math(1,2,3,4))
console.log(lots_of_math(0,-2,3,-4))