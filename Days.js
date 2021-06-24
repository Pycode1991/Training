const getRandEvent = () => 
const random = Math.floor(Math.random() * 3);
  if(random === 0) {
    return 'Marathon';
  }else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Swing';
  }
 
};

const getTrainingDays = event => {
  let = days;
  
  if(event === 'Marathon') {
    days = 30;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Swing') {
    days = 30;
  }
  
  return days;
  
};

const name = 'JavaS';

const logEvent = (name, event) => {
  
  console.log(`${name} event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name} s time to train is: ${days} days`);
  
logEvent(name, event);
logTime(name, days);
  
  
const event2 = getRandEvent();
const days2 = getTrainingDays(event2)
const name2 = 'James';
  
logEvent(name2, event2);
logTime(name2, days2);
