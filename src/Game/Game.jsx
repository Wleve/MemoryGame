import React from 'react';
import './Game.css';
const Game = () => {
    return (
        <div className="GamePage">
            <div className="GamePageBox">
                <div className='CornerCircle1'>
                <div className="CornerCircle1 top-left"></div>
                <div className="CornerCircle1 top-right"></div>
                <div className="CornerCircle1 bottom-left"></div>
                <div className="CornerCircle1 bottom-right"></div>
                </div>
                <h1 className="TheGame"> The Game </h1>
                <button className="StartButton">Start</button>
                <button className="SettingsButton">settings</button>
            </div>









        </div>

    );
    
    }
export default Game;