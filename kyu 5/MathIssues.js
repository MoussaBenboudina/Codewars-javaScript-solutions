




Math.round = function(number) {
    let partEnt =[] , partReel=[] , k=0,j=0 ;
    number = number.toString().split('')

    for(let i=0;i<number.length;i++)
    if(number[i] === '.')
    k=i;
  
    if(k>0){
    for(let i=0;i<k;i++)
    partEnt[i] = number[i];

    for(let i=k+1;i<number.length;i++)
    partReel[j++]=number[i];

    console.log(partEnt)

    return   parseInt(partReel[0]) >= 5 ? parseInt(partEnt.join(''))+1 : parseInt(partEnt.join(''));
    }else
    return parseInt(number.join('')) 

};

Math.ceil = function(number) {
    let partEnt = [] , i=0 ,k=0;
   number = number.toString().split('');
   while(number[i] !== '.' && i< number.length)
     partEnt[i] = number[i++];
    if(number[i] === '.')
    k++;
     return  k>0 ? parseInt(partEnt.join(''))+1 : parseInt(number.join(''));      
};

Math.floor = function(number) {
  let partEnt = [] , i=0;
  number = number.toString().split('');
  while(number[i] !== '.' && i< number.length)
    partEnt[i] = number[i++];
  if(i>0)
    return parseInt(partEnt.join(''));
  else
     return parseInt(number.join(''));
};