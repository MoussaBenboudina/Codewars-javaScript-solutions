







function sortArray(array) {
    // Return a sorted array.
    let k=0;
  index = [];
  for(var i=0;i<array.length;i++){
  if (array[i] % 2 !== 0 ){
  index[k++] =i;
  }}
  
  for(var j=0;j<index.length;j++)
  for(var i=0;i<index.length-1;i++){
      if (array[index[i]] > array[index[i+1]]){
          var temp= array[index[i]];
          array[index[i]] = array[index[i+1]];
          array[index[i+1]] = temp;
  
      }}
   
    
    
    
    return array;
  }