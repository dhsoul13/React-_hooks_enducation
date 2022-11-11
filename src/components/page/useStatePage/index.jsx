import React, { useState } from 'react';

const UseStatePage = () => {
  const getRandomNumbers = () => {
    console.log('loading...');
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  };
  //   const [state, setState] = useState(getRandomNumbers());

  const [state, setState] = useState(() => getRandomNumbers());

  const add = () => {
    setState((prev) => {
      return prev + 1;
    });
  };

  const remove = () => {
    setState((prev) => prev - 1);
  };

  const reverse = () => {
    setState(0);
  };
  return (
    <div>
      <h2>Счетчик: {state}</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: `calc(min(200px, 100%))`,
        }}
      >
        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            add();
          }}
        >
          Добавить
        </button>
        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            remove();
          }}
        >
          Убрать
        </button>

        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            reverse();
          }}
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default UseStatePage;
