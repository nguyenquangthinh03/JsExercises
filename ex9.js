function countChar(stringInput){
    var map = {};
    for(var i = 0; i<stringInput.length; i++){
        if(map[stringInput[i]] == null){
            map[stringInput[i]] = 1;
        }
        else{
            map[stringInput[i]]++;

        }
    }
return JSON.stringify(map);
}
// test case
console.log(countChar("abacasdaababa       1111 22@@@"))