






function findUniq(arr) {
    for(let i=0;i<arr.length;i++)
        if(arr[0] === arr[1]){
            if(arr[i] !== arr[0]){
                return arr[i];
            } 
        } else 
            if (arr[0] !== arr[2])
                return arr[0];
             else 
                  return arr[1];         
}