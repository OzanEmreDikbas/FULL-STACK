
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <h1>Clarusway</h1>
      <main>
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
