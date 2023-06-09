



function digitalRoot(n) {

  while(n.toString().length > 1)
    n = [...(n.toString())].reduce((acc, curent) =>  parseInt(acc) + parseInt(curent) , 0)
  
    return n;
}