



function nextBigger(n){
    
    function minN(arr , indexStart){
    let indexMin=indexStart+1;
    for(let i=indexStart+1;i<arr.length;i++)
        if(arr[i] < arr[indexMin]  &&  arr[indexStart] < arr[i])
    indexMin=i;
    return indexMin;
    }
  
n=[...n.toString()].map(val => parseInt(val));
for(let i=n.length-2;i>=0;i--)
    for(let j=i+1;j<n.length;j++)
        if(n[i] < n[j]){
            const x=i , y=minN(n,i);
            [n[x] , n[y]] = [n[y], n[x]];
            for(let j=i+1;j<n.length;j++)
                for(let k=j+1;k<n.length;k++)
                    if(n[j] > n[k])
                        [n[j] , n[k]] = [n[k] , n[j]];
            return parseInt(n.join(''));
        }  
return -1;
}
