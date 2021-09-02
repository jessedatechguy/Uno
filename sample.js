const deck = {}

const colors = ['blue', 'red', 'green', 'yellow']
for (let n of [1, 2]) {
  for (let color of colors) {
    for (let i = 0; i <= 9; i++) {
      deck[`${color}-${i}-${n}`] = {
        color,
        value: `${i}`,
        n
      }
    }

    for (let special of ['skip', 'reverse', 'draw2']) {
      deck[`${color}-${special}-${n}`] = {
        color,
        value: `${special}`,
        n
      }
    }
  }
}

for (let n of [1, 2, 3, 4]) {
    for (let special of ['wild', 'draw4']) {
        deck[`${'wild'}-${special}-${n}`] = {
            color: 'wild',
            value: `${special}`,
            n
        }
    }
}
const cards = Object.keys(deck)
