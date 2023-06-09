


let arr = [ 3 , 3, 3, ]
console.log(findUniq(arr))
function findUniq(arr) {
    for(let i=0;i<arr.length;i++)
        if(arr[0] === arr[1]){
            // console.log(i)
            if(arr[i] !== arr[0]){
                // console.log(2)
                return arr[i];
            } 
        } else 
            if (arr[0] !== arr[2])
                return arr[0];
             else 
                  return arr[1];         
}