









function rowWeights(array){
    let s1=0,s2=0,s=[];
    for(var i=0;i<array.length;i++){
      if(i%2 === 0){
    s1+=array[i];
      }else{
    s2+=array[i]; 
      }
    }
    s.push(s1 , s2)
    return s;
    }