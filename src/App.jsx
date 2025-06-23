import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import Game from './Game/Game.jsx';
import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handlePlay = () => {
    setFade(true);
    setTimeout(() => {
      navigate('/Game');
      setFade(false);
    }, 400); 
  };

  const handleHome = () => {
    setFade(true);
    setTimeout(() => {
      navigate('/');
      setFade(false);
    }, 400);
  };
  return (
    
      <div className="AppLayout">
        <nav className="Navbar">
          <div className="Logo">
            <div className="Ellipse"></div>
          </div>
          <div className="NavLinks">
            <button onClick={handleHome} className='Links'><span className="NavLinkText">home</span></button>
            <button onClick={handlePlay} className='Links'><span className="NavLinkText">play</span></button>
        </div>
        </nav>
        <div className="MainContent">
          <header className="Header">
             <div className="HeaderBar top"></div>
             <div className="HeaderBar middle"></div>
             <div className="HeaderBar bottom"></div>
          </header>
          <div className={`PageContent${fade ? ' fade-out' : ''}`}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/Game' element={<Game />} />
              </Routes>
            
          </div>
        </div>
      </div>
    
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}