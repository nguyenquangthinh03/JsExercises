function formatWhitespace(arr) {
    for (let i = 0; i < arr.length; i++) {
        //Check elements is whitespaces?
        // if true convert element into 1 whitespace
        isWhiteSpaceString = typeof arr[i] === 'string' && !arr[i].trim().length
        isNotNull = arr[i].length
        if (isWhiteSpaceString && isNotNull) {
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
    return arrResult.sort()
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
    return arrResult.sort()
}
// Test case
console.log(similar(["bbc", "abc", " bbc", "", " ", 1, "2", "  2"], ["bbc","abc", " abc", "        ", 1, 2]))
console.log(diff(["bbc", "abc"," bbc", "", " ", 1, "2", "  2"], ["bbc","abc", " abc", "        ", 1, 2]))
console.log(similar([], [""]))
console.log(diff([], [""]))


