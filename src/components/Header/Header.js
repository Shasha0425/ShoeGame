import React from "react";
import "./Header.css";
import GameStats from "../GameStats";

const Header = props => (
    <div className="header">
        <ul>
            <li><h2>Sneaker Game</h2></li>
            <GameMessage score={props.score} topScore={props.topScore} />
            <li id="score">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
        
    </div>
)

export default Header;

