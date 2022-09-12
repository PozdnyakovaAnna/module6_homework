function getNumberReturnFunction(Number1) {
    return function getNumberReturnSum(Number2) {
      return Number1 + Number2;
  };
  }
  console.log (getNumberReturnFunction(5)(10));