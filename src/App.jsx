import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Game from './Game/Game.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="AppLayout">
        <nav className="Navbar">
          <div className="Logo">
            <div className="Ellipse"></div>
          </div>
          <div className="NavLinks">
            <a href="/"><span className="NavLinkText">home</span></a>
            <a href="/about"><span className="NavLinkText">play</span></a>
          </div>
        </nav>
        <div className="MainContent">
          <header className="Header">
             <div className="HeaderBar top"></div>
             <div className="HeaderBar middle"></div>
             <div className="HeaderBar bottom"></div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path='/Game' element={<Game />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;