//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }


//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];   
// }
// console.log(soma);


//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// let soma = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
//     media = soma / numbers.length;
// }
// console.log(media);



//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// let soma = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
//     media = soma / numbers.length;
    
// } 
// if (media > 20){
//     console.log("Valor maoir do que 20");
// } else {
//     console.log("Valor menor ou igual a 20");
// }



//5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numeroMaior = numbers[0];
// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] > numeroMaior){
//         numeroMaior = numbers[index];
//     }
// }
// console.log(numeroMaior);




//6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let impar = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     if (numbers[index] % 2 !== 0){
//         impar += 1;//para saber quantos números ímpares tenho que incrementar a cada loop +1
//     }
// }
//     if  (impar === 0){//o 0(zero) representa qualquer número que seja par
//         console.log("nenhum valor ímpar encontrado")
//     } else {
//         console.log(impar)
// }



//7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let menorNumero = numbers[0];
// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] < menorNumero){
//         menorNumero = numbers[index];
//     }
// }
// console.log(menorNumero);



//8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;





