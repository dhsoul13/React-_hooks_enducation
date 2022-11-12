import React from 'react';

const ButtonComponent = ({ type = 'add', add }) => {
  return (
    <button
      style={{
        width: `100%`,
      }}
      onClick={() => {
        if (type === 'add') {
          add.addFun(add.value);
          add.deleteInput('');
        }
      }}
    >
      Ввод
    </button>
  );
};

export default ButtonComponent;
