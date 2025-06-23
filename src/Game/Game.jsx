import React, { useState } from 'react';
import './Game.css';


const DIFFICULTY_SETTINGS = {
  easy: 4,
  medium: 7,
  hard: 9,
};

const Game = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [color, setColor] = useState('blue');
  const [gameStarted, setGameStarted] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [highlighted, setHighlighted] = useState([]);
  const [userSelections, setUserSelections] = useState([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const n = DIFFICULTY_SETTINGS[difficulty];
  const totalCircles = n * n;
  const numToHighlight = Math.min(level + 2, totalCircles);

  const handleStart = () => {
    const indices = [];
    while (indices.length < numToHighlight) {
      const idx = Math.floor(Math.random() * totalCircles);
      if (!indices.includes(idx)) indices.push(idx);
    }
    setHighlighted(indices);
    setUserSelections([]);
    setGameStarted(true);
    setShowHighlights(true);
    setTimeout(() => setShowHighlights(false), 2000);
  };

 const handleCircleClick = idx => {
  if (!gameStarted || showHighlights) return;
  if (userSelections.includes(idx)) return;
  const next = [...userSelections, idx];
  setUserSelections(next);

  if (next.length === highlighted.length) {
    const correct = highlighted.every(h => next.includes(h));
    if (correct) {
      setTimeout(() => {
        setScore(s => s + 1);
        setLevel(l => l + 1);
        handleStart();
      }, 1000);
    } else {
      setTimeout(() => {
        alert('Wrong circle.');
        setGameStarted(false);
        setLevel(1);
        setScore(0);
      }, 100);
    }
  }
};

  return (
  <>
    {!gameStarted && (
      <div className="GamePage">
        <div className="GamePageBox">
          <div className='CornerCircle1'>
            <div className="CornerCircle1 top-left"></div>
            <div className="CornerCircle1 top-right"></div>
            <div className="CornerCircle1 bottom-left"></div>
            <div className="CornerCircle1 bottom-right"></div>
          </div>
          <h1 className="TheGame"> The Game </h1>
          <button className="StartButton" onClick={handleStart}>Start</button>
          <button className="SettingsButton" onClick={() => setShowSettings(true)}>settings</button>
        </div>
      </div>
    )}

    {gameStarted && (
      <div className="GamePage">
        <div className="GamePageBox">
       
          <div>
            <span>Level: {level} | Score: {score}</span>
          </div>
          <div
            className="grid"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${n}, 3rem)`,
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            {Array.from({ length: totalCircles }).map((_, idx) => {
              let bg = '#f99b9b'; 
              if (showHighlights && highlighted.includes(idx)) bg = color;
              if (!showHighlights && userSelections.includes(idx)) bg = '#bbb';
              return (
                <div
                  key={idx}
                  onClick={() => handleCircleClick(idx)}
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: bg,
                    border: '2px solid #fff',
                    cursor: !showHighlights && gameStarted ? 'pointer' : 'default',
                    boxSizing: 'border-box',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    )}

    {showSettings && (
      <>
        <div className="ModalOverlay" onClick={() => setShowSettings(false)} />
        <div className="SettingsModal">
          <h2>Settings</h2>
          <div>
            <label>Difficulty:</label>
            <label>
              <input
                type="radio"
                value="easy"
                checked={difficulty === 'easy'}
                onChange={() => setDifficulty('easy')}
              /> Easy
            </label>
            <label>
              <input
                type="radio"
                value="medium"
                checked={difficulty === 'medium'}
                onChange={() => setDifficulty('medium')}
              /> Medium
            </label>
            <label>
              <input
                type="radio"
                value="hard"
                checked={difficulty === 'hard'}
                onChange={() => setDifficulty('hard')}
              /> Hard
            </label>
          </div>
          <div>
            <label>Color:</label>
            <label>
              <input
                type="radio"
                value="blue"
                checked={color === 'blue'}
                onChange={() => setColor('blue')}
              /> Blue
            </label>
            <label>
              <input
                type="radio"
                value="green"
                checked={color === 'green'}
                onChange={() => setColor('green')}
              /> Green
            </label>
            <label>
              <input
                type="radio"
                value="black"
                checked={color === 'black'}
                onChange={() => setColor('black')}
              /> Black
            </label>
          </div>
          <button onClick={() => setShowSettings(false)}>Save & Close</button>
        </div>
      </>
    )}
  </>
);
}

export default Game;