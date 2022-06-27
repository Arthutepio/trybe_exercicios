//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for(let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for(let index = 0; index < numbers.length; index +=1){
//     soma = soma + numbers[index];// pode ser escrito apenas 'soma += array[index]'
// }
// console.log(soma);
 
//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0;
// for(let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
// }
// console.log(soma / numbers.length);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let result =0;
// for(let i = 0; i < numbers.length; i +=1){
//     result += numbers[i];
// }
// console.log('A soma total do array é: ' + result);
// let media = result / numbers.length;
// console.log('A média é: ' + media);
// if(media > 20){
//     console.log("valor maior que 20");
// } else{
//     console.log("valor menor ou igual a 20");
// }

//5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let maiorElemento = numbers[0];// já declaro o primeiro indice como sendo o maior
// for (let index = 1; index < numbers.length; index+=1) {
//     if(numbers[index] > maiorElemento){
//         maiorElemento = numbers[index]
//     }
// }
// console.log(maiorElemento);

//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let impar = [];
// for (let index = 0; index < numbers.length; index+=1) {
//     if(numbers[index] % 2 !== 0){
//         impar.push(numbers[index]);
//     }    
// }
//     if(impar.length === 0){
//         console.log("nenhum valor ímpar encontrado");
//     }else{
//         console.log(impar);
//     }
//7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let menorElemento = numbers[0];
// for (let index = 1; index < numbers.length; index+=1) {
//     if( numbers[index] < menorElemento){
//         menorElemento = numbers[index];
//     }
// }console.log(menorElemento);

//8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let array = [];
// for(let index = 1; index <= 25; index +=1){
//     array.push(index);
// }console.log(array);

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
// let array = [];
// for(let index = 1; index <= 25; index +=1){
//     array.push(index);
// }
// for (let index = 0; index < array.length; index+=1) {
//     console.log(array[index] / 2);
    
// }



//MUITO FELIZ POR TER CONSEGUIDO !!!!!!!!!!!


//BÔNUS
//1.Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);



//2.Ordene o array numbers em ordem decrescente e imprima seus valores;

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers);
let resultado = [];

for (let index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length){
        resultado.push(numbers[index] * numbers[index +1]);
    } else {
        resultado.push(numbers[index] * 2);
    }

    
}
console.log(resultado);
