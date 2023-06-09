



function powersOfTwo(n){
    let result = []
    if(n === 0)
       return [1]
    for(let i=0 ; i<=n; i++)
        result.push(Math.pow(2,i))
    return result
    }