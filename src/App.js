import UseEffect from "./components/useEffect";
import Lifecycle from "./components/Lifecycle";
import './index.css';



function App() {
  return (
    <div className="App">
      <h1 className="first-h1">useEffcet vs Lifecycle</h1>
      <header className="App-header">
        <UseEffect ></UseEffect>
        <Lifecycle></Lifecycle>
      </header>
    </div>
  );
}

export default App;
