function makeArrayConsecutive2(statues){
	statues.sort((a,b)=>{
		return a-b;
    });
		var min = statues[0];
		var max = statues[statues.length - 1];
		var count = 0;
	
		for(var i = min; i < max; i++){
			if(statues.indexOf(i) === -1){
				count++;		
			}
		}
		return count;
}