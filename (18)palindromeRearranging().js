function palindromeRearranging(inputString) {
    var count = [];
    var counter = 0;
    
    for(let i = 0; i < inputString.length; i++){
        var letter = inputString[i];
        count[letter] = (count[letter] || 0) + 1;
    }
    
    console.log(count);
    
    for(var key in count){
        if(counter > 1) {
            return false;
        } else if (count[key] % 2 !== 0){
            counter++
            console.log(counter);
        } 
    } 
    if(counter > 1){
        return false; 
    }
    return true;
}