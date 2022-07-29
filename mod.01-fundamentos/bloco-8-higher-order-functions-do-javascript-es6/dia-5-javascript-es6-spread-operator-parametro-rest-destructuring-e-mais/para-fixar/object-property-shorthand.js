const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

  const newUser2 = (id, name, email) => {
    return {
      id,//Quando o as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. É desnecessário a repetição 
      name,
      email,
    };
  };
  
  console.log(newUser2(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
//   podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:


//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude});
  
  console.log(getPosition(-19.8157, -43.9542));

  const getPosition2 = (latitude, longitude) => ({
    latitude,
    longitude
  });
  
  console.log(getPosition2(-19.8157, -43.9542));