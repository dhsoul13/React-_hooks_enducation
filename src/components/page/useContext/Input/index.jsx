import React, { useContext } from 'react';
import { AlertContext } from './../HOC/';
const Input = () => {
  const { state, setState } = useContext(AlertContext);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
