import React, {useState, useEffect} from 'react';
import './App.css';
import {shuffleCards} from './components/card';
import Hand from './components/hand';

function App() {

  const [deck, setDeck] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(1);



  useEffect(() => {
    const {playerOne, playerTwo, deck} = shuffleCards()
    setDeck(deck)
    setPlayerOne(playerOne)
    setPlayerTwo(playerTwo)
  }, [])
  





  return (
    <div className="App">
      <Hand cards={playerOne}/>
      <Hand cards={playerTwo}/>
      
    </div>
  );
}

export default App;
