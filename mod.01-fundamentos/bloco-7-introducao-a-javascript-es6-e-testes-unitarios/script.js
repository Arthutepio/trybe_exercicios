// // Parte I
// // 1. 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// // Modifique a estrutura da função para que ela seja uma arrow function;
// // Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// // Modifique as concatenações para template literals.
// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

//   //2. 🚀 Crie uma função que retorne um array em ordem crescente.
//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortOddsAndEvens = () => { // Função criada para ordenar os valores do array oddsAndEvens de forma crescente
//     oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7;
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;

//     return oddsAndEvens;
//   };
//   const sortedArray = sortOddsAndEvens(); // Armazenando o valor retornado pela função em uma variável
//   console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // foi necessário alterar essa linha 😉

//   //Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.

//   const sortArrayBonus = (array) => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
//   };

//   const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
//   console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);

//   //array.sort com sort em uma linha.
// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
    
// // Parte II
// //Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// // 1. Crie uma função que receba um número e retorne seu fatorial.
// const factorial = (num) => {
//     let result = 1;
//     for (let i = 2; i <= num; i += 1){
//         result *= i;// mesmo que result = result * i;
//     }
//     return result;
// }

// //Recursiva
// const factorial = (num) => num > 1 ? num * factorial(num - 1) : 1;
// console.log(factorial(5));

// //2. Crie uma função que receba uma frase e retorne a maior palavra.
// const biggestWord = (phrase) => {
// const array = phrase.split(' ');
// let wordSize =0;//responsável por armazenar o tamanho da maior palavra.
// let result = '';//responsável por armazenar a palavra de maior tamanho.
// for (const word of array){
//     if (word.length > wordSize){
//         wordSize = word.length;
//         result = word;
//     }
// }
// return result;
// }
// console.log(biggestWord('Crie uma função que receba uma frase e retorne a maior palavra.'));

// //Longestword com sort em uma linha.
// const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// 3. 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
let clickCount = 0;
const btnClick = document.getElementById('button');
const count = document.getElementById('count');
btnClick.addEventListener('click', () => count.innerHTML = clickCount += 1);

//4. 🚀 Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const changeX = (nome) => {
    const frase = 'Trybe x aqui!';
    const fraseArray = frase.split(' ');// o metódo split transformará a frase em um array
    for(let i = 0; i < fraseArray.length; i += 1){
        if (fraseArray[i] === 'x') {
            fraseArray[i] = nome;// troca o valor do x dentro do array pelo nome recebido por parâmetro        
        }
    }
    return fraseArray.join(' ');
};
console.log(changeX('teste'));

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let result = `
    ${func}
    
    Minhas três principais habilidades são:`;
    
    skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
        result = `${result}
        - ${skill}`;
    }); // reatribui e adiciona a skill atual a variável resultado
    return result;
};

console.log(minhasSkills(changeX('Bebeto')));