import React, { useState } from 'react'
import PropTypes from 'prop-types';
import FormContext from './FormContext';

export default function FormProvider({ children }) {
  const [data, setData] = useState([]);

  const addData = (info) => {
    setData(data.concat(info)); // CONCAT para armazenar todas as informações
  };

  const context = {
    data,
    setData,
    addData,
  }

  return (
    <FormContext.Provider value={ context }>
      {children}
    </FormContext.Provider>
  )
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
}