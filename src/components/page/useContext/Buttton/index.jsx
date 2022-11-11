import React, { useContext } from 'react';
import { AlertContext } from './../HOC/';
const Button = () => {
  const { state, setState } = useContext(AlertContext);
  return (
    <button
      onClick={() => {
        alert(state);
      }}
    >
      Клик
    </button>
  );
};

export default Button;
