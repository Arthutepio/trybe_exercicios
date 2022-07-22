//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  
  const verifyNum = (number) => number % 3 === 0 && number % 5 === 0;
  return numbers.find(verifyNum);
}

console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const fiveLetters = (name) => name.length === 5;
  return names.find(fiveLetters);
}

console.log(findNameWithFiveLetters());

//3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const verifyId = (musica) => musica.id === id;//comaparo cada valor do meu Id com a string que foi passada
  return musicas.find(verifyId);

}

console.log(findMusic('31031685'))