import React from 'react';

const InputComponent = ({ value, setText }) => {
  return (
    <>
      <input
        type={'text'}
        style={{
          width: `100%`,
        }}
        value={value}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

export default InputComponent;
