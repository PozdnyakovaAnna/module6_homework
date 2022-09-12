function printNumbers(firstNumber, lastNumber) {
    let current = firstNumber;
    let intervalId = setInterval(function() {
      console.log(current);
      if (current == lastNumber) {
        clearInterval(intervalId);
      } 
      current++;  
    }, 1000);
  }
  printNumbers(5, 10);