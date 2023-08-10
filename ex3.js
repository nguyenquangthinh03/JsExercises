function sum(arrInput){
   var sum = 0
    if(arrInput == null) sum = 0
    else{
      for(var i=0; i<arrInput.length; i++)
      {
       sum = arrInput[i] + sum
      }
    }
    if(sum % 2 == 0) console.log("even");
    else console.log("odd")
  }
// Test case
sum([])
sum([-1, -2, 2 ,3])
sum([0,1,-2])