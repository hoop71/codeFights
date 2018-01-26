function matrixElementsSum(matrix) {
 var totalPrice = 0;
 var badFloors = [];
   for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
         if(matrix[i][j] === 0){
            badFloors.push(j)
         } else if(badFloors.indexOf(j) === -1){
             totalPrice += matrix[i][j] ;        
         }
      }
   }
   return totalPrice;
}