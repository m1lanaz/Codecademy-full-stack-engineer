let userName = " ";
userName ? console.log("Hello!") : console.log(`Hello, ${userName}`);
let userQuestion = "Will I have a good day at work?";
console.log(userQuestion);
let randomNumber =  Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 8:
    eightBall = 'It is certain';
    break;
  case 7:
    eightBall = 'It is decidedly so';
    break;
  case 6:
    eightBall = 'Reply hazy try again';
    break;
  case 5:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 3:
    eightBall = 'My sources say no';
    break;
  case 2:
    eightBall = 'Outlook not so good';
    break;
  case 1:
    eightBall = 'Signs point to yes';
    break;
  case 0:
    eightBall = 0;
    break;
  default:
    eightBall = randomNumber;
};

console.log(eightBall);
