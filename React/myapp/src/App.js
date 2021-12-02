// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  const age = 25;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>Age: {age}</h1> */}
        <ClassComponent old={age} car = "BMW"/>
        <FuncComp old={age+age} color = "yellow"/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
