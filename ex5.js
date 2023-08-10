function getMiddle(stringInput){
    var  middleChar = Math.round(stringInput.length / 2)
    if(stringInput.length % 2 == 0){
        console.log(stringInput[middleChar -1] + stringInput[middleChar])    
    }
    else{
        console.log(stringInput[middleChar-1])
    }
}
// Test case
getMiddle("test")
getMiddle("   test")
getMiddle("test       ")
getMiddle("")
getMiddle(" ")