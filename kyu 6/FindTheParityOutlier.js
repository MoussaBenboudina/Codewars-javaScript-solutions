










function findOutlier(integers){
    let o=0 , e=0 , indexO ,indexE; 
    for(let i=0;i<integers.length;i++)
     if(integers[i]%2 === 0){
e++; indexE=i;
     }else{
     o++; indexO=i
     }
     return o===1? integers[indexO] : integers[indexE];
  }