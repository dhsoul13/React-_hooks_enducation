import React, { useContext, useReducer } from 'react';
import { useWriteText } from '../useWriteText';

const FunctionReducerContext = React.createContext();

export const useDates = () => {
  return useContext(FunctionReducerContext);
};

const FunctionReducer = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'add':
          return {
            ...state,
            data: action.data,
          };
        case 'update':
          return {
            ...state,
            data: action.data,
          };
        default: {
          return state;
        }
      }
    },
    {
      data: [],
    }
  );

  const add = (data) => {
    return dispatch({ type: 'add', data });
  };

  const update = () => {
    const data = localStorage.getItem('data')
      ? localStorage.getItem('data').split(',')
      : [];
    return dispatch({
      type: 'update',
      data,
    });
  };
  return (
    <FunctionReducerContext.Provider
      value={{
        data: state.data,
        add,
        update,
      }}
    >
      {children}
    </FunctionReducerContext.Provider>
  );
};

export default FunctionReducer;
