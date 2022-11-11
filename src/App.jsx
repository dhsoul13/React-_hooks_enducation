import UseEffectPage from './components/page/useEffect';
import UseMemo from './components/page/useMemo';
import UseRef from './components/page/useRef';
import UseStatePage from './components/page/useStatePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStatePage /> */}
        {/* <UseEffectPage /> */}
        {/* <UseRef /> */}
        <UseMemo />
      </header>
    </div>
  );
}

export default App;
