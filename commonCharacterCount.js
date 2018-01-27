function isLucky(n) {
    var str = n.toString()
    var first = 0;
    var second = 0;
    for(let i = 0; i < str.length/2; i++){
        first+= parseInt(str[i]);
        
    } console.log(first);
    for(let j = str.length/2; j < str.length; j++){
        second+= parseInt(str[j]);
        
    } console.log(second);
    
    if(first === second){
        return true; 
    }
    return false;
}

