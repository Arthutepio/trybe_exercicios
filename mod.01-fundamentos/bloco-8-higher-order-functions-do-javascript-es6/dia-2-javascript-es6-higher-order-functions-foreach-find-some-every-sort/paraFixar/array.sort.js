//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  const orderAge = ((a, b) => a.age - b.age);
  people.sort(orderAge); 
  console.log(people);

  //2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  const orderAge = ((a, b) => b.age - a.age);//apenas inverto a ordem para ordenar decrescente
  people.sort(orderAge); 
  console.log(people);
  
  //também é possivél ordenar por nome
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  const orderName = ((a, b) => a.name > b.name ? 1 : -1);//O sort() espera sempre um numero 
  people.sort(orderName); 
  console.log(people);
