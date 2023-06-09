




function noSpace(x){
      x=[...x];
      let res=[];
      x.forEach(val =>{
        if(val != ' ')
          res.push(val)
      })
      return res.join('');
    }

