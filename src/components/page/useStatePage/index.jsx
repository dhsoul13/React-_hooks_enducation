import React, { useState } from 'react';

const UseStatePage = () => {
  const getRandomNumbers = () => {
    console.log('loading...');
    return Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
  };
  //   const [state, setNumber] = useState(getRandomNumbers());

  const [state, setNumber] = useState(() => getRandomNumbers());

  const add = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const remove = () => {
    setNumber((prev) => prev - 1);
  };

  const reverse = () => {
    setNumber(0);
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
