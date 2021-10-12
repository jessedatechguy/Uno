import React, { useState, useEffect } from "react";
import "./App.css";
import { shuffleCards } from "./components/card";
import Hand from "./components/hand";
import Discard from "./components/discard";
import DrawButton from "./components/DrawButton";

function App() {
  const [discard, setDiscard] = useState([]);
  const [deck, setDeck] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(1);

  useEffect(() => {
    const { playerOne, playerTwo, deck } = shuffleCards();
    setDeck(deck);
    setPlayerOne(playerOne);
    setPlayerTwo(playerTwo);
    //console.log(deck.pop())
    discard.push(deck.pop());
    setDiscard(discard);
    setDeck(deck);
  }, []);

  const playCard = (card, playerNumber) => {
    const hand = playerNumber === 1 ? [...playerOne] : [...playerTwo];
    const index = hand.findIndex(
      (handcard) =>
        handcard.color === card.color && card.value === handcard.value
    );
    hand.splice(index, 1);
    console.log(hand);
    console.log(card);
    if (playerNumber === 1) {
      setPlayerOne(hand);
    } else {
      setPlayerTwo(hand);
    }
    const pile = [...discard];
    pile.push(card);
    setDiscard(pile);
  };

  const draw = (playerNumber) => {
    const temp = deck.shift();
    if (playerNumber === 1) {
      playerOne.push(temp);  
    }
    else if (playerNumber === 2){
      playerTwo.push(temp);
    }
    
    setDeck([...deck]);
  };

  console.log(playerTwo);
  return (
    <div className="App">
      <Hand cards={playerOne} playCard={playCard} playerNumber={1} />
      <DrawButton onClick={draw} playerNumber={1} />
      <p>-------------</p>
      <Hand cards={playerTwo} playCard={playCard} playerNumber={2} />
      <DrawButton onClick={draw} playerNumber={2} />
      <p>-------------</p>

      <button> Start the game</button>
      {discard.length > 0 ? <Discard cards={discard} /> : ""}

      <p>-------------</p>

      <Hand cards={deck} playCard={playCard} />
    </div>
  );
}

export default App;
