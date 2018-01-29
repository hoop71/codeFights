function reverseParentheses(s) {
     if(s.includes('(')){
          return reverseParentheses(change(s));
     }
     return s; 
}
 
function change(s){
     var regexp = /\(([^()]*)\)/i;
     var subStr = regexp.exec(s)[1];
     subStr = subStr.split("").reverse().join("");
     return s.replace(regexp, subStr);
}