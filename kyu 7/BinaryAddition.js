












function addBinary(a,b) {
    let n=a+b;
  let i=0,n1;
  var s =[]
  while(n>1){
      s[i++] = (n % 2);
       if(n % 2 !== 0)
     n--;
     n/=2;
       }
  
  s[i]=1;
  let results=s.reverse().join("");
    return results;
  
  }