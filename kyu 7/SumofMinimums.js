







function sumOfMinimums(arr) {
    let sum=0;
for(let i=0; i<arr.length; i++){
    let min=arr[i][0];
    for(let j=0; j<arr[i].length; j++)
        if(min > arr[i][j])
        min = arr[i][j];
sum+=min;
}
return sum;
}