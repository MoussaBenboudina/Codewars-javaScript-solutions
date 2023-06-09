








function XO(str) {
    let x=0 ,o=0;
str.split('').map(ele=>{
   if(ele.toLowerCase() === 'x')
   x++;
   else if(ele.toLowerCase() === 'o')
   o++
}).join('')
return x===o ? true : false 
}


