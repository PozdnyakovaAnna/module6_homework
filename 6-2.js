function checkingNumber(yourNumber) {
    let option; 
    if (yourNumber > 1000) {
        console.log ('Данные неверны');
      } else if ( yourNumber === 0) {
        console.log ('Введенное значение равно нулю');
      } else if ( yourNumber === 1) {
        console.log ('Введенное значение равно единице');
      } else {for (let i = 2; i < yourNumber; i++) {
        if ( yourNumber % i === 0 ){
          option = 1; i = yourNumber;
        } else if (yourNumber % i !== 0) {
        option = 0;
        }
      }
      if (option === 0){
        console.log ('Введенное число простое');
      } else console.log ('Введенное число составное');
      }
    };
    
    checkingNumber(1008);