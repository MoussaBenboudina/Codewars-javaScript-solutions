






function persistence(num) {
    let x=1 , res=0;
    while([...num.toString()].length > 1){
        x=1;
        num = [...num.toString()]
        for(let i=0; i<num.length; i++)
            x*=num[i];
            num = x;
            res++;
  }
    return res;
  }