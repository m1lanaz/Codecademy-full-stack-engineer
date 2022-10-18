const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 5;
        break;
      case 'Wednesday':
        return 7;
        break;
      case 'Thursday':
        return 9;
        break;
      case 'Friday':
        return 10;
        break;
      case 'Saturday':
        return 9;
        break;
      case 'Sunday':
       return 10;
       break;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got more sleep than needed!");
    } else {
      console.log("You should get some rest");
    };
  }
  
  calculateSleepDebt();