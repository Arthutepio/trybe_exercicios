const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const address = 'address'; // Armazenando a palavra 'address' em uma variável
  const deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene a chave `deliveryPerson` em uma variável através de 'notação de ponto'.
  const customerName = order['name']; // Acesse e armazene a chave `name` em uma variável através de 'notação de chaves'.
  const customerPhone = order['phoneNumber']; // Acesse e armazene a chave `phoneNumber` em uma variável através de 'notação de chaves'.
  const street = order[address].street; // Acesse e armazene a chave `street` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
  const number = order[address].number; // Acesse e armazene a chave `number` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
  const apartment = order[address].apartment; // Acesse e armazene a chave `apartment` em uma variável, através de 'notação de chaves' e 'notação de ponto'.

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}
 customerInfo(order);
  
  const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva'; // Altere o nome da pessoa compradora
    const newTotal = order.payment.total = '50'; // Altere o valor total da compra
    const pizzas = Object.keys(order.order.pizza); // Recupere as chaves que estão em `order.order.pizza`
    const drinks = order.order.drinks.coke.type; // Recupere o `type` da chave `coke`.
    
    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); // Exiba a mensagem desejada utilizando `template literals`
  }
  
  orderModifier(order);

  //Parte III
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const addNewKey = (obj, key, value) => {
    obj[key] = value;
    // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  //2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listKeys = (obj) =>  Object.keys(obj);
// O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

console.log(listKeys(lesson1));

//3.Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const sizeObj = (obj) =>  Object.keys(obj).length;
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));

//4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) =>  Object.values(obj);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

console.log(listValues(lesson1));

//5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// O método "Object.assing()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.

console.log(allLessons);;

//6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// Primeiro passo: Crie a função getNumberOfStudents que recebe um objeto por parâmetro.
const getNumberOfStudents = (obj) => {
    // essa será a função responsável pela lógica e ela receberá um objeto como parâmetro.
    let total = 0; // começamos a contagem de alunos com 0;
    const array = Object.keys(obj); // pegamos as chaves do objeto;
    for (index in array) { // for in para iterar sobre o array de chaves
        total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total;
  // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(getNumberOfStudents(allLessons));
  