import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="NavBarVRest">
        <div className="Navbar">
            <div className="Logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="NavLinks">
                <a href="/">home</a>
                <a href="/about">game</a>
                <a href="/contact">contact</a>
            </div>
        <div className='Header'>
          
      </div>
        </div>

      </div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;