import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handlePlay = () => {
    setFade(true);
    setTimeout(() => {
      navigate('/Game');
    }, 500); // match the CSS transition duration
  };

  return (
    <div className={`HomePage ${fade ? 'fade-out' : ''}`}>
      <div className="HomePageBox">
        <div className="CornerCircle top-left"></div>
        <div className="CornerCircle top-right"></div>
        <div className="CornerCircle bottom-left"></div>
        <div className="CornerCircle bottom-right"></div>
        <h1 className="BrainSpan"> brain-span </h1>
            <p className="GameDescription">memory game</p>
            <button onClick={handlePlay} className="PlayNowButton">Play Now</button>
        </div>

    </div>

    );
}
export default Main;