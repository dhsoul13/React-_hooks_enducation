import React, { useContext } from 'react';
import UseCallback from './components/page/useCallback';
import UseContext from './components/page/useContext';
import UseEffectPage from './components/page/useEffect';
import UseMemo from './components/page/useMemo';
import UseRef from './components/page/useRef';
import UseStatePage from './components/page/useStatePage';
import AlertHoc from './components/page/useContext/HOC';
import UseReducerHoc, { UseReducerContext } from './components/page/useReducer';

function App() {
  const info = useContext(UseReducerContext);

  console.log(info);
  return (
    <AlertHoc>
      <div className="App">
        <header className="App-header">
          {/* <UseStatePage /> */}
          {/* <UseEffectPage /> */}
          {/* <UseRef /> */}
          {/* <UseMemo /> */}
          {/* <UseContext /> */}1
        </header>
      </div>
    </AlertHoc>
  );
}

export default App;
