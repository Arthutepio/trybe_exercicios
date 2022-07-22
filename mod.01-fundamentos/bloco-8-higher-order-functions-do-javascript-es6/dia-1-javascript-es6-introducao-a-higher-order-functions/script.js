//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const employeeGenerator = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto, email: `${email}@trybe.com` };
}
   
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(employeeGenerator));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const check = (meuNumero, numeroSorteado) => (meuNumero === numeroSorteado);

const resultadoDoSorteio = (meuNumero, callback) => {
 const number = Math.floor((Math.random() * 2) + 1);
 return callback(meuNumero, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};
console.log(resultadoDoSorteio(2, check));

//3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
//primeiro crio uma regra de negocio que ira comparar o gabarito com a resposta do estudante
const compara = (gabarito, respostas) => {
  if (gabarito === respostas) {//resposta correta adiciona 1 ponto
    return 1;
  }
  if (respostas === 'N.A') {//ausência de uma resposta não altera a pontuação
    return 0;
  }
  return -0.5;//esposta incorreta reduz a pontuação final em 0.5 ponto
};

const nota = (gabarito, respostas, callback) => {
  let contador = 0;
  for (let i = 0; i < gabarito.length; i += 1){
    const result = callback(gabarito[i], respostas[i]);
    contador += result;
  }
  return `Sua nota final é: ${contador}`;//retorna o total de pontos obtidos
}

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));

//Bônus

//Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damangeDragon = (dragon) => Math.floor(Math.random() * ((dragon.strength - 15) +1) + 15);

const damageAtack (warrior) => {
const dangerMin = warrior.strength;
const dangerMax = dangerMin * warrior.weaponDmg;
const damageWarrior = Math.floor(Math.random() * (dangerMax - dangerMin))
}
console.log(damangeDragon);