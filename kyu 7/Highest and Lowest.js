




function highAndLow(numbers){
  numbers = numbers.split(' ').map(ele => parseInt(ele));
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
    }