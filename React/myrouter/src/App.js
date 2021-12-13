
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './component/MainHeader';

function App() {
  return (
    <div className="App">
      <h1>Clarusway</h1>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Welcome />}/>
          <Route path='/welcome' element={<Welcome />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/productDetail' element={<ProductDetail />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
