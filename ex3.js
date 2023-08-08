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
    if(sum % 2 == 0) console.log("even");
    else console.log("odd")
  }
