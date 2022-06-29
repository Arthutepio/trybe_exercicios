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
    

