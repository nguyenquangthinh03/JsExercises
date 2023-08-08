function descendingOrder(number){
    number = number.toString();
    var digit = number.split('');
    digit.sort(function(a,b){return b-a});
    number = digit.join('')
    return number;
}
