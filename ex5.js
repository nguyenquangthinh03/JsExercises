function getMiddle(s){
    var  m = Math.round(s.length / 2)
    if(s.length % 2 == 0){
        console.log(s[m -1] + s[m])    
    }
    else{
        console.log(s[m-1])
    }
}
