








function uniqueInOrder(iterable){
    let arr=[] , k=0;
 iterable = Array.from( iterable);
for(let i=0; i<iterable.length ; i++)
    if(iterable[i] !== iterable[i+1])
        arr[k++] = iterable[i];
return arr;
  }