// //1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// let numeros = 1;

// for (let index = 10; index > 0; index-=1) {//usei o decremento para fazer a contagem decrescente
//     numeros *= index;   
// }
// console.log(numeros);


// //2.Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// // let word = "arara";
// // let contrario = "";
// // // console.log(word.length);
// // for (let index = 0; index < word.length; index+=1){
// //      contrario += word[word.length -1 - index]; 
// //     }
// //     console.log(contrario);



//3.Considere o array de strings abaixo:
// let array = ['javascript', 'python', 'html', 'css'];
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.    
let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log("a maior palavra é " + maiorPalavra);
console.log("a menor palavra é " + menorPalavra);      
    
// 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let maiorNumeroPrimo = 0;//crio uma variavél que receberá o maior número primo

for (let index = 2; index <= 50; index += 1){//vou percorrer de 2 até 50
  let ePrimo = true;
  for (let divisor = 2; divisor < index; divisor +=1){
  if (index % divisor === 0){
    ePrimo = false;
  }
  }
  if (ePrimo){
    maiorNumeroPrimo = index;
  }
  
}
console.log('O maior número primo é: ' + maiorNumeroPrimo);

// Bônus
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****
// let n = 5;
// let asterisco = "*";
// let resultado = "";
// for (let index = 0; index < n; index +=1){
//   resultado += asterisco;
// };
// for (let index = 0; index < n; index +=1){
//   console.log(resultado);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****
// let n = 5;
// let asterisco = "*";
// let resultado = "";
// for (let index = 0; index < n; index +=1){
//   resultado += asterisco;
//   console.log(resultado);
// }
//3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
let n = 5;
let asterisco = "*";
let resultado = "";
let posicao = n -1;
for (let index = 0; index < 0; index +=1){
  for(let coluna = 0; coluna < n; coluna +=1){
    if(coluna < posicao){
      resultado += " ";
    }else{
      resultado += asterisco;
    }
  }
 
  console.log(resultado);
  resultado = '';
  posicao -= 1;

}