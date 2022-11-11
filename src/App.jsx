import React from 'react';
import UseCallback from './components/page/useCallback';
import UseContext from './components/page/useContext';
import UseEffectPage from './components/page/useEffect';
import UseMemo from './components/page/useMemo';
import UseRef from './components/page/useRef';
import UseStatePage from './components/page/useStatePage';
import AlertHoc from './components/page/useContext/HOC';

export const AlertContext = React.createContext();

function App() {
  return (
    <AlertHoc>
      <div className="App">
        <header className="App-header">
          {/* <UseStatePage /> */}
          {/* <UseEffectPage /> */}
          {/* <UseRef /> */}
          {/* <UseMemo /> */}
          <UseContext />
        </header>
      </div>
    </AlertHoc>
  );
}

export default App;
