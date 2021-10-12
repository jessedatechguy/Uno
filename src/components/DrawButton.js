import React from "react";

const DrawButton = (props) => {
  return (
    <button
      onClick={() => {
        props.onClick(props.playerNumber);
      }}
    >
      draw
    </button>
  );
};

export default DrawButton;
