import React from "react";
 

const Discard = (props) => {
    const card = props.cards[props.cards.length-1]; 
    return <p>{card.color} {card.value}</p>
};


export default Discard;