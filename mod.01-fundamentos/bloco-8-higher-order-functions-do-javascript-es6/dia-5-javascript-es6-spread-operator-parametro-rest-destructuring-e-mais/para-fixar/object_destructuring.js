const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  //A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:
  const { name } = product;
  console.log(name); // Smart TV Crystal UHD

  //Se quisermos pegar, além do nome, o vendedor do produto, podemos incluir a propriedade seller dentro das chaves para acessar o seu valor correspondente:
  const { price, seller } = product;
  console.log(price); // 1899.05
  console.log(seller); // Casas de Minas

  //E se a chave do objeto contiver outro objeto como valor?
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  //Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos:
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
  //Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

  //Podemos também usar a desestruturação de objetos em conjunto com o spread operator

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek; //Feito a desestruturação
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];  //utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  //podemos trocar o nome da variável ao fazermos a desestruturação:
  const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { 
    a: name,  //seria o mesmo que: const name = student.a;
    b: classAssigned, 
    c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática


  ////////////////////PARA FIXAR///////////////////
  //1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
 
  const userJobInfos = {...user, ...jobInfos};
  console.log(userJobInfos);

  //2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
  //Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
  const { name, age, nationality, profession, squad, squadInitials } = userJobInfos;
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);