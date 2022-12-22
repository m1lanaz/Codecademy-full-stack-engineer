const factorial = num => {
    let newNum;
    for(var i = num; i > 0; i--){
      newNum = newNum * i;
      if (i === num){
          newNum = i;
      }
    }
    return(newNum);
  }