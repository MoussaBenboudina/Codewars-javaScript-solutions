








function solve(s){
    let L=U=0;
 (s.split('')).map(function(ele){
   if(ele === ele.toLowerCase())  L++;
    else  U++;
 })
 return (L>=U) ? s.toLowerCase() : s.toUpperCase();
 }