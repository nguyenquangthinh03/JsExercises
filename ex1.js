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
    return arr3.sort()
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
    return arr3.sort()
}

