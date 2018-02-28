function variableName(name) {
    
    var name = name.toLowerCase();
    var test = "abcdefghijklmnopqrstuvwxyz1234567890_"

    if(Number.isInteger(parseInt(name[0])) == true){
        return false;
    } 
    
    for(let i = 0; i < name.length; i++){
        if(test.indexOf(name[i]) == -1){
            return false; 
        }
    }
    return true;
}