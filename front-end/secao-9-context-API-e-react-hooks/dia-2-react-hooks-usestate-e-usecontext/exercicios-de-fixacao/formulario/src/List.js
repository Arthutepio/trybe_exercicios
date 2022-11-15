import React, { useContext } from 'react'
import FormContext from './context/FormContext';

export default function List() {
  const { data } = useContext(FormContext);
  return (
    <div>
      <ul>
        {
          data.map((person, i) => (
            <li key={ i }>
              { `Nome: ${person.name}` }<br/>
              { `Idade: ${person.age}` }<br/>
              { `Cidade: ${person.city}` }<br/>
              { `Módulo: ${person.modulo}` }<br/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
