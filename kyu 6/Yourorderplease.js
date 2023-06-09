







function order(words){
    let arr = [] , k;
words = words.split(' ');
for(let i=0; i<words.length;i++)
    for(let j=0; j<words[i].length;j++)
    if(!isNaN(words[i][j])){
        console.log(true)
      k=words[i][j]
      arr[k-1] = words[i]
      }
return arr.join(' ');
  }