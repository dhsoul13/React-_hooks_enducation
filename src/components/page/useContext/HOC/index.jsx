import React, { useState } from 'react';

export const AlertContext = React.createContext();

const AlertHoc = ({ children }) => {
  const [state, setState] = useState('');
  return (
    <AlertContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertHoc;
