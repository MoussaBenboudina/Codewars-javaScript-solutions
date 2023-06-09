





            
 function snail(array) {
    if(array[0].length == 0)
    return [];
    

    function top(arr , start , end){
        let res=[];
        for(let i=start; i<end; i++)
            res.push(arr[start][i]);
     return res;       
    }

    function right(arr , start , end){
        let res=[];
        for(let i=start; i<end-1; i++)
            res.push(arr[end-1][i]);
     return res.reverse();       
    }

    function bottom(arr , start , end){
        let res=[];
        for(let i=start+1; i<end-1; i++)
            res.push(arr[i][start]);
     return res.reverse();
    }

    function left(arr , start , end){
        let res=[];
        for(let i=start+1; i<end; i++)
            res.push(arr[i][end-1]);
     return res;
    }


    let x=0; y=array.length;
    let res = [];
    
   while(res.length < (array.length * 2 - 1)){
        res.push(top(array , x , y));
        res.push(right(array , x , y));
        res.push(bottom(array , x , y));
        res.push(left(array , x , y));
        y--; x++;
   }
   const result = [];
   for(let i=0; i<res.length;i++)
   for(let j=0; j<res[i].length;j++)
        result.push(res[i][j]);

        return result;
  }