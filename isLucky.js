function sortByHeight(a) {
    var arr = []; 
    var nums = [];
    var counter = 0;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            nums.push(a[i]);
        }
    }
    
    nums.sort(function(a,b){
        return a-b;
    });

    for(let j = 0; j < a.length; j++){
        if(a[j] === -1){
            arr.push(a[j])
        } else {
            arr.push(nums[counter]);
            counter++;
        }
    }
    return arr;

}