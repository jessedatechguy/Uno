import React from "react";

const Hand = (props) => {
    return props.cards.map(card => {
        return <p>{card.color} {card.value}</p>
    })
};


export default Hand;