import { useState } from 'react';

export const useWriteText = () => {
  const [state, setState] = useState([]);

  const addText = (name) => {
    setState((prev) => {
      const newArray = prev.map((el) => el);
      newArray.push(name);
      return newArray;
    });
  };

  const updateText = () => {
    setState(
      localStorage.getItem('data')
        ? localStorage.getItem('data').split(',')
        : []
    );
  };

  const remove = (id) => {
    setState('');
  };

  return {
    state,
    addText,
    remove,
    setState,
    updateText,
  };
};
