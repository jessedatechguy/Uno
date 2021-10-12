import React from "react";

const Hand = (props) => {
  const handleClick = (card) => {
    // console.log("click");
    props.playCard(card, props.playerNumber);
  };
  return props.cards.map((card) => {
    return (
      <div onClick={() => handleClick(card)} key={Math.random()}>
        <p>
          {card.color} {card.value}
        </p>
      </div>
    );
  });
};

export default Hand;
