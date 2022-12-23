// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

  //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

//Bem-vinda, Margarida
// console.log(" Bem-vinda, " + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// info.recorrente = "Sim"
// console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto.
// for (let index in info){
//     console.log(index);
// }

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
// for (let index in info){
//     console.log(info[index]);
// }

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
  
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

//   for (let index in info2){
//   //o if/else resolve a condição de "Ambos recorrentes"
//     if( index === "recorrente" && info[index], info2[index] === "Sim" ){ 
// console.log("Ambos recorrentes");
//   } else {
//     console.log(info[index] + " e " + info2[index]);
//   }
// }


//Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
 
// // console.log(leitor.livrosFavoritos);
//   // 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
  
 
  // console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome +  " se chama " + leitor.livrosFavoritos[0]['titulo']);



  //7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
  // se quero adicionar algo a um array use o .push
//   leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   },
//   );
// console.log(leitor.livrosFavoritos);


// //8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
  // console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + ' ' + 'livros Favoritos.');


  //Parte II - Funções
  // 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
  function palindromo(string){
    for(let i in string){
      if(string[i] !== string[(string.length - 1) - i]){
        return false;
      } else{
        return true;
      }
    }
  }
  console.log(palindromo('mutum'));

  //Outra forma de verificar se é palíndromo
  
  function palindromo(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(palindromo('ana'));

  //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
  function maiorValor(array){
    let indiceMaior = 0;
    for(let i in array){
      if(array[indiceMaior] < array[i]){
        indiceMaior = i;
      }
    }
    return indiceMaior;
  }
  console.log(maiorValor([2, 3, 6, 7, 10, 1]));

  //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  function indiceMenor(array){
    let menor = 0;
    for(let i in array){
    if(array[menor] > array[i]){
      menor = i;
    }
  }
  return menor;
}
  console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));

  //4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  function maiorNome(array){
    let nome = array[0];
    for (let i in array){
      if(nome.length < array[i].length){
      nome = array[i];
    }
  }
  return nome;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana',]));

//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


function maisRepetido(array) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in array) {
    let verificaNumero = array[index];
    for (let index2 in array) {
      if (verificaNumero === array[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return array[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//Outra forma de resolver

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let index2 in num) {
    if (contRepetido < num[index2]) {
      contRepetido = num[index2];
      contNumero = index2;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somaDeTodosNumeros(n){
let total = 0;
  for(let i = 1; i <= n; i += 1){
    total += i;
}
return total;
}
console.log(somaDeTodosNumeros(5));
  
//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaPalavra(palavra, finalPalavra){
  palavra = palavra.split('');
  finalPalavra = finalPalavra.split('');
  controle = true;
  for(let i = 0; i < finalPalavra.length; i += 1){
    if (palavra[palavra.length - finalPalavra.length + i] !== finalPalavra[i]) {
      controle = false
    }
  }
  return controle;
}
console.log(verificaPalavra('trybe', 'be'));

//Outra forma de realizar o exercício

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));

//Bônus
// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
}
function romanoDecimal(n) {
  n = n.toLowerCase();
  const len = n.length;
  let soma = numerosRomanos[n[len - 1]];
  let atual = numerosRomanos[n[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[n[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}
console.log(romanoDecimal('MMXVIII'));

//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vector){
  let newArray = [];
  for(let i = 0; i < vector.length; i += 1){
    const numbers = vector[i];
    for(let i2 = 0; i2 < numbers.length; i2 += 1){
      const current = numbers[i2];
      if((current % 2) === 0){
        newArray.push(current);
      }
    }
  }
  return newArray;
}
  console.log(arrayOfNumbers(vector));

  //🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
const result = [];
for (let i in basket){
  const fruit = basket[i];
  if(!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

//Usando o objeto abaixo, faça os exercícios a seguir:
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Duas formas de se resolver
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

//5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.
for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index++) {
  console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}