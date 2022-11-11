import React, { useCallback, useState } from 'react';
import ExapleComponent from './ExampleComponent';

const UseCallback = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styled = {
    color: colored ? '#884' : 'black',
  };

  const generateItemsFromApi = useCallback(() => {
    return new Array(count).fill('.').map((i, index) => `Элемент ${index}`);
  }, [count]);

  return (
    <div>
      <h1 style={styled}>Колличество элментов: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Добавить
      </button>
      <button
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Изменить
      </button>

      <div
        style={{
          marginTop: `100px`,
        }}
      >
        <ExapleComponent mas={generateItemsFromApi} />
      </div>
    </div>
  );
};

export default UseCallback;
