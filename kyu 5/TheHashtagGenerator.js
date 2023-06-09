






function generateHashtag(str) {
    str = Array.from(str);
    
    function longStr(str){
        let x=0;
        for(let i=0;i<str.length;i++)
        if(str[i] === ' ')
        x++;
        return str.length - x;
    }
  
    let result = []; k=0
 if(longStr(str)< 140 && str.length >0 && str[0] !== ' '){
    result[k++] = '#'
    result[k++] = str[0].toUpperCase();
    for(let i=1;i<str.length;i++)
       if(str[i] === ' '){
           if(str[i+1] !== ' ' && str[i+1] !== undefined)
           result[k++] = str[++i].toUpperCase();
       }else
       result[k++] = str[i];
       return result.join("")
 }else{
    return false;
 }
}