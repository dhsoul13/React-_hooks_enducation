import React, { useState, useEffect } from 'react';

const UseEffectPage = () => {
  const [type, setType] = useState('users');
  const [dopRender, setDopRender] = useState(1);
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('delete');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);
  return (
    <div>
      <h2>Раздел: {type}</h2>
      <h4>
        <pre>Позиция:{JSON.stringify(position, null, 3)}</pre>
      </h4>
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
            setType('users');
          }}
        >
          Пользователи
        </button>
        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            setType('todos');
          }}
        >
          Дела
        </button>

        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            setType('posts');
          }}
        >
          Посты
        </button>

        <button
          style={{
            marginBottom: `10px`,
          }}
          onClick={() => {
            setDopRender(dopRender + 1);
          }}
        >
          Перерендерить компонент
        </button>
      </div>

      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
};

export default UseEffectPage;
