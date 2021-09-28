// this is going to be a library that i use for shuffuling
import shuffleArray from "shuffle-array";
//this is my deck

export const shuffleCards = () => {


const deck = [];
//this is creating the basic cards
const colors = ["blue", "red", "green", "yellow"];
for (let n of [1, 2]) {
  for (let color of colors) {
    for (let i = 0; i <= 9; i++) {
      deck.push({
        color,
        value: `${i}`,
        n,
      });
    }
    // this is creating the special colored cards
    for (let special of ["skip", "reverse", "draw2"]) {
      deck.push({
        color,
        value: `${special}`,
        n,
      });
    }
  }
}
// this is creating the wild cards
for (let n of [1, 2, 3, 4]) {
  for (let special of ["wild", "draw4"]) {
    deck.push({
      color: "wild",
      value: `${special}`,
      n,
    });
  }
}
//const cards = Object.keys(deck);

//shuffuling the cards
shuffleArray(deck);
// making the players cards
const playerOne = [];
const playerTwo = [];
//this is the stack the player will be drawing from
const playingStack = [];
// populating player one
for (let i = 0; i < 7; i++) {
  const temp = deck.pop(i);
  playerOne.push(temp);
}
//populating player two
for (let i = 0; i < 7; i++) {
  const temp = deck.pop(i);
  playerTwo.push(temp);
}
//this is where the players will be placing their cards


//console.log(playerOne);
//console.log(playerTwo);
//console.log(deck);
return {deck, playerOne, playerTwo};
};

//console.log(cards);