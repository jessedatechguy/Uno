// this is going to be a library that i use for shuffuling 
import shuffleArray from "shuffle-array";
//this is my deck
const deck = {};
//this is creating the basic cards
const colors = ["blue", "red", "green", "yellow"];
for (let n of [1, 2]) {
  for (let color of colors) {
    for (let i = 0; i <= 9; i++) {
      deck[`${color}-${i}-${n}`] = {
        color,
        value: `${i}`,
        n,
      };
    }
// this is creating the special colored cards
    for (let special of ["skip", "reverse", "draw2"]) {
      deck[`${color}-${special}-${n}`] = {
        color,
        value: `${special}`,
        n,
      };
    }
  }
}
// this is creating the wild cards
for (let n of [1, 2, 3, 4]) {
  for (let special of ["wild", "draw4"]) {
    deck[`${"wild"}-${special}-${n}`] = {
      color: "wild",
      value: `${special}`,
      n,
    };
  }
}
const cards = Object.keys(deck);
//shuffuling the cards
shuffleArray(cards);
// making the players cards
const playerOne = [];
const playerTwo = [];
//this is the stack the player will be drawing from
const playingStack = [];
// populating player one
for (let i = 0; i < 7; i++) {
  const temp = cards.pop(i);
  playerOne.push(temp);
}
//populating player two
for (let i = 0; i < 7; i++) {
  const temp = cards.pop(i);
  playerTwo.push(temp);
}
//this is where the players will be placing their cards









console.log(playerOne);
console.log(playerTwo);
console.log(cards);

export default deck;
