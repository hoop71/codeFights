function areSimilar(a, b) {
    if(a.toString() == b.toString()){
        return true; 
    }
    
    var x = [];
    var y = [];
    
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            x.push(a[i]);
            y.push(b[i]);
        }
    }
    
    x = x.reverse()
    console.log(x);
    console.log(y);
    
    if(x.length === 2 && (x.toString() == y.toString())){
        return true; 
    }
    return false; 
}
        