import { useEffect, useState } from 'react';

export const useChangeNameHook = (name) => {
  const [state, setState] = useState(name);

  const deleteName = () => {
    setState('');
  };

  const changeName = (name) => {
    setState(name);
  };

  useEffect(() => {
    console.warn('Имя изменено');
  }, [state]);

  return { state, changeName, deleteName };
};
