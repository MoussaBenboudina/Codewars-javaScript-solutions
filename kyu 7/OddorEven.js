





function oddOrEven(array) {
  
    if(array.length > 0){
    let sum = array.reduce((acc,current) => acc + current)
    return sum%2 === 0? "even":"odd";
    }else
    return 'even'

}
