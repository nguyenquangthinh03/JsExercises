function unique_in_order(s){
    var a = []
    var i = 0
    while(i < s.length){
        //check similiar
        while(s[i] === s[i+1]){
            i++
        }
        a.push(s[i])
        // not similiar
        i++;
    }
    console.log(a)
}
