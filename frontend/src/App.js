import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <ShopContextProvider>
            <NavigationBar/>
            <Routes>
                <Route path='/' element = {<Home/>}></Route>
                <Route path="products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
          </ShopContextProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;