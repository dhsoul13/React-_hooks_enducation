import React, { useContext } from 'react';
import FunctionReducer from './main/FuctionReducer/Index.jsx';
import MainPage from './main/index.jsx';

function App() {
  return (
    <div className="App">
      <FunctionReducer>
        {' '}
        <MainPage />
      </FunctionReducer>
    </div>
  );
}

export default App;
