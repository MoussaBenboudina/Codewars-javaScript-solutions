 



function sumStrings(a,b) {
a=[...a];
b=[...b];
let res=[],y=0 , i=a.length-1 , j=b.length-1 ;

while(i>=0 || j>=0) {
    let x1,x2;
x1=(parseInt(a[i]));
x2=parseInt(b[j]);
let k=0;
if(i<0) x1=0;
if(j<0) x2=0;


if(((x1+ x2+ y) <= 9 )&&(i>0 || j>0)) {

    res.unshift(x1+x2+y)
    j--;
    i--;
    y=0;

    }
else if(((x1+ x2+ y) >= 9 )&&(i>0 || j>0)) {

    res.unshift(x1+x2-10+y)
    j--;i--;
    if(y>0)
    y=0;
    y++;

} else if(i<=0 && j<=0) {
    if((x1+x2+y) === 0) {
        j--;
        i--
    }else{

    res.unshift(x1+x2+y)
    j--;
    i--;
}}}
return res.join('')
}
