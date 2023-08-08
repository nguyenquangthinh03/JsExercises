function uppercase(x){
  x.trim();
  var arr = x.split('')
    for(var i = 0; i<arr.length; i++){
      if((arr[i] !== " " && arr[i-1] === " ") || (i===0 && arr[i] !==" ")){
        arr[i] = arr[i].toUpperCase();
      }
    }
    x = arr.join('');
    return x * 1;/// convert to number
}
