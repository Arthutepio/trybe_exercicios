const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

//a verificação é false porque uma das condições não é true
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);




//A ordem que a operação vai obedecer, será da esquerda para a direita
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;



//Abaixo tem um mini cheat sheet para você ver em quais possibilidades teremos resposta true ou false.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


const currentHour = 10;
let massage
if (currentHour >= 22) {
        massage = console.log("Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18){
    massage = console.log("Rango da noite, vamos jantar :D");
} else if (currentHour >= 14){
    massage = console.log("Vamos fazer um bolo pro café da tarde?")
} else if (currentHour >= 11){
    massage = console.log("Hora do almoço!!!")
} else if (currentHour >= 4){
    massage = console.log("Hmmm, cheiro de café recém passado")
}


//Operador OR
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//tabela mostrando como é o resultado de cada operação
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


let weekDay = "quarta-feira"
if (weekDay === "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira") {
    console.log( "Oba, mais um dia de aprendizado na Trybe >:D");
}

//Operador NOT
console.log((2 + 2) === 4); //retorna true

console.log(!(2 + 2) === 4);//o sinal "!"  inverte o valor booleano de um elemento

//Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:


//Strings
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


// Números
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.


//Valores nulos
console.log(!null); // true


//valores indefinidos
console.log(!undefined); // true
