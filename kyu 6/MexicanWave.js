



function wave(str){

    function UprCase(str , index){
        str = [...str];
        result = [];
        
        for(let i=0;i<str.length;i++)
            if(str[index] == ' '){
                return -1
            }
            else if(index === i && str[index] != ' '){
                result[i] = str[i].toUpperCase();
            }else 
                 result[i] = str[i];


        return result.join('');
    }

    res = [];
    for(let i=0;i<str.length;i++)
        if(UprCase(str , i) != -1)
             res.push(UprCase(str , i))
    return res;
  }


