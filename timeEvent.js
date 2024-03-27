const number = () => {
  console.log("this massage called after every 5 second");
};

const intervalId = setInterval(number, 1000); // setInterval is function who excute a block of code at spacific time repeatedly .


setTimeout(() => clearInterval(intervalId), 5000); // settimeOut is a function who excute the a block of code at a spacific time at once 
