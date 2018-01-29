function addBorder(picture) {
    var length = picture[0].length + 2;
    var final = [];
    var star = ["*"];
    console.log(length);
    
    
    var top = function(){
        var border = "";
        for(let i = 0; i < length; i++){
            border += "*";
        } 
        final.push(border);
    }
    top();
    
    for(var j = 0; j < picture.length; j++){
       final.push("*" + picture[j] + "*");
    } 
    
    top();
    return final;
}


