import React from 'react';
import '../index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Dispatch from '../components/Dispatch';
import Notifications from '../components/Notifications';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/dispatch" element={ <Dispatch /> } />
        <Route path="/notifications" element={ <Notifications /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>);
}

export default App;




