function evenDigitsOnly(n) {
    
    n = n.toString();
    
    for(let i = 0; i < n.length; i++){
       if(n[i] % 2 != 0){
        return false;
        }
       
    }
    return true;
}