




function stray(numbers) {
   for(let i=0;i<numbers.length;i++)
        if(numbers[0] === numbers[1]) {
            if(numbers[0] != numbers[i])
                return numbers[i];
        }else if (numbers[0] === numbers[2])
            return numbers[1]
        else 
            return numbers[0]
  }