const menu = {
    _meal : ' ',
    _price : 0,
    set meal(mealToCheck) {
      if (mealToCheck === 'string'){
        return _meal = mealToCheck;
      } 
    }
  };
  