import React, { useState, useContext } from 'react'
import FormContext from './context/FormContext';

function Form() {

//   const [name, setName] = useState('');
    // FUNÇÃO INDIVIDUAL
//   const handleChangeName = ({ target }) => {
//     console.log(target);
//   setName(target.value);
// }

  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    city: '',
    modulo: '',
  });
  // FUNÇÃO GENERICA
  const handleChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({...prevState, [name]: value}));
  };

  const { addData } = useContext(FormContext);
  
  
  const handleClick = (event) => {
    event.preventDefault();
    // console.log('clicou');
    const info = {
      name: formState.name,
      age: formState.age,
      city: formState.city,
      modulo: formState.modulo,
    };
    addData(info);
  };


return(
  <form>
    <label htmlFor="name">
      Nome Completo:
      <input
        type="text"
        placeholder="Nome Completo"
        name="name"
        id="name"
        value={formState.name}
        onChange={handleChange}
        /> 
    </label><br/>

    <label>
      Idade:
      <input
      type="number"
      placeholder="idade"
      name="age"
      id="age"
      value={formState.age}
      onChange={handleChange} />
    </label><br/>

    <label>
      Cidade:
      <input
      type="text"
      placeholder="cidade"
      name="city"
      id="city"
      value={formState.city}
      onChange={handleChange} /> 
    </label><br/>

    <label htmlFor="modulo" onChange={handleChange}>
      <input type="radio" name="modulo" value="Fundamentos"/>Fundamentos<br/>
      <input type="radio" name="modulo" value="Front-end"/>Front-end<br/>
      <input type="radio" name="modulo" value="Back-end"/>Back-end<br/>
      <input type="radio" name="modulo" value="Ciência da Computação"/>Ciência da Computação<br/>
    </label>

    <button type="submit" onClick={handleClick}>Enviar</button>
  </form>
);
}

export default Form;