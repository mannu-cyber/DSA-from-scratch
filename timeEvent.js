const number = () => {
  console.log("this massage called after every 5 second");
};

const intervalId = setInterval(number, 1000);

setTimeout(() => clearInterval(intervalId), 5000);
