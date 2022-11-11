import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style.css';
import UseReducerHoc from './components/page/useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseReducerHoc>
    <App />
  </UseReducerHoc>
);
