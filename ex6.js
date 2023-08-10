function descendingOrder(number){
    var digit = number.split('');
    digit.sort(function(a,b){return b-a});
    number = digit.join('')
    return number*1; // convert to number
}
// Test case
console.log(descendingOrder("123"))
console.log(descendingOrder("0001203"))
