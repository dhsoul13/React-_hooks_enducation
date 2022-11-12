import React, { useContext, useReducer } from 'react';

const UseReducerContext = React.createContext();

const UseReducerHoc = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'show':
          return {
            ...state,
            visible: true,
          };
        case 'hide':
          return {
            ...state,
            visible: false,
          };

        default:
          return state;
      }
    },
    {
      visible: false,
    }
  );

  const show = () => dispatch({ type: 'show' });
  return (
    <UseReducerContext.Provider
      value={{
        visible: state.visible,
        show,
      }}
    >
      {children}
    </UseReducerContext.Provider>
  );
};

export default UseReducerHoc;
