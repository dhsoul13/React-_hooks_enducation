import React, { useEffect, useRef, useState } from 'react';

/// не правильно
// let counst = 1;
const UseRef = () => {
  const [state, setState] = useState('');

  // не вызывает рендера
  const ref = useRef(1);

  // ссылка на элемент

  const refReference = useRef(null);

  // focus

  const focus = useRef();

  // Преыдущий state

  const prevText = useRef('');

  /// зацикливание, так как любое изменение state, ведет к перерендрингу

  //   useEffect(() => {
  //     counst += 1;
  //   });

  useEffect(() => {
    ref.current++;
  });

  useEffect(() => {
    prevText.current = state;
  }, [state]);

  const focusFoo = () => {
    focus.current.focus();
  };

  return (
    <div>
      <h2>Колличество рендеров: {ref.current}</h2>

      <h2>Текст текущий: {state}</h2>

      <input
        type="text"
        ref={focus}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />

      <button
        ref={focus}
        onClick={() => {
          setState((prev) => prev + 1);

          focusFoo();
        }}
      >
        Ок
      </button>

      <h3
        style={{
          fontWeight: 300,
          fontStyle: 'italic',
        }}
      >
        Ранее набранный текст {prevText.current}
      </h3>
    </div>
  );
};

export default UseRef;
