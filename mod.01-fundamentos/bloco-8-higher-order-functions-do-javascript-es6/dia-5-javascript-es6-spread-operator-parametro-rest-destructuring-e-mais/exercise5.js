//5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring.
const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([num1, num2, num3]) => [num3, num2, num1];
console.log(swap(myList));