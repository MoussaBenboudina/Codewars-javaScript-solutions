









function incrementString (strng) {
    let numbers=[] , string=[],s=0 , n=0;
 strng=strng.split('');
 for(let i=strng.length-1;i>=0;i--)
 if(!isNaN(strng[i]))
 numbers[n++]=parseInt(strng[i]);
 else
 break
 for(let i=0;i<(strng.length - numbers.length);i++)
 string[s++]=strng[i]
numbers.reverse();
if(n>0){
for(let k=numbers.length-1;k>=0;k--)
if(numbers[k] !== 9){
numbers[k]++;
break;
}else{
    numbers[k]=0;
if(k===0)
numbers.unshift(1);
}
numbers = numbers.join('')
}else{
    numbers =1;
}
string[s] =numbers;
return string.join('')  
}