function allLongestStrings(a) {
    var longest = 0;
        var answer = [];
        for(let i = 0; i < a.length; i++){
                if(a[i].length > longest){
                        longest = a[i].length;
                        console.log(longest)
                }
        }
        for(let j = 0; j < a.length; j++){
                if(a[j].length === longest){
                        answer.push(a[j]);
                }
        }
        return answer; 
}

