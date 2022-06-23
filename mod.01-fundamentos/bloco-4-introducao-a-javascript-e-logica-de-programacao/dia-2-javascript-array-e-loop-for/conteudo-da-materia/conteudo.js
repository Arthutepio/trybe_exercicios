let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// retorna que tem 3 itens dendro array

/////////////////////////////////////////////////
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];// pega o primeiro item do array
console.log(searchForFirstTask);
// Tomar café


let searchForLastTask = tasksList[tasksList.length - 1];// Pega o último item do array
console.log(searchForLastTask);
// Brincar com o cachorro

////////////////////////////////////////////
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // o .push adiciona mais um item ao final de um array
tasksList.push("Estudar mais")
tasksList.unshift("Escovar os Dentes")// o unshift adiciona o item no ínicio do array
console.log(tasksList);
// ['Escovar os Dentes', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe' 'Estudar mais']


//////////////////////////////////////////////
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa do array
tasksList.shift();// remove o primeiro item do array
console.log(tasksList);

// ['Reunião' ]


///////////////////////////////////////////////



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);//usado para procurar o índice de um item no Array

// 1


///////////////////////////////////////

const pessoas = ['Amanda', 'Bruna', 'Carla'];
const pessoaEscolhida = pessoas[2];
console.log(pessoaEscolhida);



for(let index = 0; index < 10; index+=1 ){
    console.log(index);
  }
  
  for(let index = 0; index <= 20; index+=1 ){
    console.log(index);
  }
  for(let index = 0; index < 10; index+=1 ){
    console.log('Oie');}
  
