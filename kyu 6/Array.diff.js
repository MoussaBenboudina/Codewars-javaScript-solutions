





function arrayDiff(a, b) {
    let result = [];
    for(let i=0; i<a.length;i++)
       for(let j=0; j<b.length; j++)
        if(a[i] === b[j])
            delete a[i]
    for(i=0;i<a.length; i++)
    if(a[i] !== undefined)
        result.push(a[i])
    return result;
}