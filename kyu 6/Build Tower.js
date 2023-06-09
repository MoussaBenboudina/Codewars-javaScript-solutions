














function towerBuilder(n) {
let result =[] ,x=n-1; y=1; 
 for(let i=0; i<n;i++){
 result.push(' '.repeat(x) + '*'.repeat(y) + ' '.repeat(x))
 x--; y+=2;
 }
 return result;
}