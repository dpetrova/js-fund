/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Template method */
//It defines the skeleton of an algorithm/operation as an abstract class, that how should it be performed.

//We will be taking an example of a chess game,

class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.currentPlayer = 0;
  }
  run() {
    this.start();
    while (!this.haveWinner) {
      this.takeTurn();
    }
    console.log(`Player ${this.winningPlayer} wins!`);
  }
  start() {}
  takeTurn() {}
  get haveWinner() {}
  get winningPlayer() {}
}

//Creating our chess class
class Chess extends Game {
  constructor() {
    super(2);
    this.maxTurns = 10;
    this.turn = 1;
  }
  start() {
    console.log(
      `Starting a game of chess with ${this.numberOfPlayers} players`
    );
  }
  takeTurn() {
    console.log(`Turn ${this.turn++} taken by player ${this.currentPlayer}`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
  }
  get haveWinner() {
    return this.turn === this.maxTurns;
  }
  get winningPlayer() {
    return this.currentPlayer;
  }
}

//That’s how we will use this
let chess = new Chess();
chess.run();
