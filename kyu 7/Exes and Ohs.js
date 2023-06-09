








function XO(str) {
    str = [...str.toString()];
    let x=0 , o=0;

    for(let i=0; i<str.length; i++)
        if(str[i].toLowerCase() == 'x')
            x++;
        else if(str[i].toLowerCase() == 'o')
            o++;
        
      return x === o ? true : false ;      
}