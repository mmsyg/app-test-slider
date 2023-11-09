function randomNumbers(n) {
  
    let numbers = [];
  
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
    }
  
    let randomFinalArray = numbers.slice(0, 4);
  
    return randomFinalArray;
  }
  