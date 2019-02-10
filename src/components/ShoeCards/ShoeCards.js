import React from "react";
import "./ShoeCards.css";

const ShoeCards = props => (
    <div
        role="img"
        aria-label="click the sneaker"
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}
    /> 
);

export default ShoeCards;