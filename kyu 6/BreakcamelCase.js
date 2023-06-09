








function solution(string) {
    let s=[] , k=0;
   string = string.split("");
   for(let i=0;i<string.length;i++)
       if(string[i] === string[i].toUpperCase()){
         s[k++] = " ";
         s[k++]=string[i];
   }else{
    s[k++]=string[i];
   }
 return s.join("");
}