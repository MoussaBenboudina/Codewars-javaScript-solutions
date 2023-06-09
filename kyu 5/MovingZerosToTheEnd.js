







function moveZeros(arr) {
    let k=0 , arr2=[] , j=0;
for(let i=0;i<arr.length;i++)
   if(arr[i] !== 0)
   arr2[j++]= arr[i];
   else
    k++;
   for(i=0;i<k;i++)
   arr2[j++]=0;
    return arr2;
  }