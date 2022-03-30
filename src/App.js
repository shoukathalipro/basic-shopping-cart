import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Products from './Components/Products';
import Details from './Components/Details';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Navigate to="home" />}/>
        <Route path="/home" element={ <Products/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/details/:objectId" element={ <Details/> } />
      </Routes>
    </Router>
  );
}

export default App;
