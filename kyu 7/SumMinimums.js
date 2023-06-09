



function sumOfMinimums(arr) {
let i=0 , sum=0;
    arr.forEach(ele => {
        ele[i++].sort();
        sum+=ele[i][0];
    });

return sum

   }