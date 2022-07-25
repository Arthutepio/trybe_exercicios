function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  // implemente seus testes aqui
  module.exports = myFizzBuzz;