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
          {/* <Routes>
            <Route path='/' element = {<Home/>}></Route>

          </Routes> */}
{/* new */}
          <div className='product_list_container'>
            <div className='container'>
              <Home/>
            </div> 


          </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
