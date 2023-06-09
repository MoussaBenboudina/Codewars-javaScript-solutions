













function partsSums(ls) {
    let sum=0;arr=[];
    ls.forEach(ele => sum+=ele);
    arr[0]=sum;
    for(let i=1; i<=ls.length; i++)
    arr[i] = arr[i-1]-ls[i-1]
    return arr
    }