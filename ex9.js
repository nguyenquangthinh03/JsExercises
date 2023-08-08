function countChar(s){
    var map = {};
    for(var i = 0; i<s.length; i++){
        if(map[s[i]] == null){
            map[s[i]] = 1;
        }
        else{
            map[s[i]]++;

        }
    }
return JSON.stringify(map);
}