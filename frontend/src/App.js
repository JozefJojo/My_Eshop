import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar/>
          <Routes>
            <Route path='/' element = {<Home/>}></Route>

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
