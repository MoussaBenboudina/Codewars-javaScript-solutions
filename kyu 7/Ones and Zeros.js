







function binaryArrayToNumber(arr){
    let result = 0 , x=1;
  for(let i=arr.length-1 ; i>=0; i--){
      if(arr[i] === 1)
        result+=x;
    x*=2;
    }
  return result;
  };