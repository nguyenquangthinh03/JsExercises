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
    console.log(arr)
}
// Test case
unique_in_order("aaaaaaa          bbbbbbbbb aaaaaaaaaaaaaAAAAAAAAAAA1111112222222       ")