function arrayChange(inputArray) {
    var a = inputArray;
    var counter = 0;
    
    for(let i = 0; i < inputArray.length; i++){
        if(a[i] >= a[i + 1]){
            var num = a[i] - a[i + 1] + 1
            a[i + 1]+= num;
            counter+= num;
        }
    }
    return counter;
}
