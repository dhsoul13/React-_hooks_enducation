import React, { useEffect, useMemo, useState } from 'react';

function complexComputed(num) {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return num * 2;
}

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const [random, setRandom] = useState(true);

  const [color, setColor] = useState(true);

  const style = useMemo(() => {
    console.log('change color');
    return {
      color: color ? 'black' : 'red',
    };
  }, [color]);

  const add = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const computed = useMemo(() => complexComputed(Date.now()), [random]);

  const remove = () => {
    setNumber((prev) => prev - 1);
  };

  const reverse = () => {
    setNumber(0);
  };

  return (
    <div>
      <div>
        <h2 style={style}>Счетчик: {computed}</h2>
        <h2>Счетчик: {number}</h2>
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

          <button
            style={{
              marginBottom: `10px`,
            }}
            onClick={() => {
              setRandom((prev) => !prev);
            }}
          >
            Выдать рандомное число
          </button>
          <button
            style={{
              marginBottom: `10px`,
            }}
            onClick={() => {
              setColor((prev) => !prev);
            }}
          >
            Изменить цвет
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
