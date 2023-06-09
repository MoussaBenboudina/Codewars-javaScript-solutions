



function nextSmaller(num) {
    let arr = num.toString().split(``).reverse(),oS = "";
    for (let i = 0; i <arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          let tempArr = arr.splice(j, 1), tempArr2 = arr.splice(0, i).sort().reverse();
          tempArr = tempArr.concat(tempArr2);
          oS += arr.reverse().concat(tempArr).join("");
          return oS.length == oS.replace(/^0+/, "").length? oS * 1: -1;
        }
      }
    }
    return -1;
  }