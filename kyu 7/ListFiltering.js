







function filter_list(l) {
    let res=[];
     l.forEach(ele => { if(typeof(ele) === 'number') res.push(ele) });
     return res;  
   }


//    function filter_list(l) {
//     return l.filter(Number.isInteger);
//   }