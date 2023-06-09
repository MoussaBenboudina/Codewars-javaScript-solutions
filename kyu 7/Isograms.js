












function isIsogram(str){
    str = [...str];
    for(let i=1; i<str.length; i++)
        for(let j=0; j<i; j++)
          if(str[i].toLowerCase() == str[j].toLowerCase())
            return false;
    return true; 
  }