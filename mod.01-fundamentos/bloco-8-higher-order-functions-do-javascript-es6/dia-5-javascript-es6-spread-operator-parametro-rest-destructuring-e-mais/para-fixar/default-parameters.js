const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value;
  
  console.log(multiply(8));