function alternatingSums(a) {
    var answer = []; 
    var team1 = [];
    var team2 = [];
        
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            team1.push(a[i]);
        } else {
            team2.push(a[i]);
        }
    }
    answer.push(team1.reduce((a, b) => a + b, 0));
    answer.push(team2.reduce((a, b) => a + b, 0));
    
    return answer;    
}
