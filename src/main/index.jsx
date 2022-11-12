import React, { useEffect, useState } from 'react';

import ButtonComponent from './ButtonAdd';
import { useDates } from './FuctionReducer/Index';
import InputComponent from './InputAdd';
import { useWriteText } from './useWriteText';
import ViewComponent from './ViewComponent';

const MainPage = () => {
  const date = useDates();

  const { state, addText, setState, updateText } = useWriteText();

  const [text, setText] = useState('');

  useEffect(() => {
    date.update();
    updateText();
  }, []);

  useEffect(() => {
    console.log(state);
    date.add(state);
    localStorage.setItem('data', state);
  }, [state]);

  return (
    <div
      style={{
        width: `100%`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: `calc(min(500px, 90%))`,
        }}
      >
        <div
          style={{
            width: '100%',
          }}
        >
          <InputComponent
            setText={setText}
            value={text}
          />
        </div>

        <div
          style={{
            width: `100%`,
            margin: '5px 0px',
          }}
        >
          <ButtonComponent
            type="add"
            add={{
              value: text,
              addFun: addText,
              deleteInput: setText,
            }}
          />
        </div>

        <div
          style={{
            width: `100%`,
          }}
        >
          <ViewComponent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
