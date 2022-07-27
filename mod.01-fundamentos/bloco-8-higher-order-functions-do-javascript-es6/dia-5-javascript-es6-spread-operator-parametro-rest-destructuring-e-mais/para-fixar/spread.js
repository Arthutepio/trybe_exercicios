// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Banana', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Leite condensado', 'Cobertura'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));