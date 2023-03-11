import { validateNumber, isCorrectPlayerNumber, showMsg } from "./helpers.js";

class Game {
  constructor() {
    this.amount_hearts = 5;
    this.ramdon_number = this.generateRandomNumber();
    this.eventEnter();
    console.log(this.ramdon_number);
  }

  eventEnter() {
    const inputPalabra = document.getElementById("input");
    inputPalabra.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.main(this.getPlayerNumber());
      }
    });
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  getPlayerNumber() {
    const inputPalabra = document.getElementById("input");
    const number = inputPalabra.value;
    inputPalabra.value = "";
    return parseInt(number);
  }

  isCorrectNumber(number) {
    if (!isCorrectPlayerNumber(number, this.ramdon_number)) {
      console.log("disminuir vidaaaa");
      return false;
    }

    console.log("ganaste, cambia de pantallaaaa");
    return true;
  }

  main(playerNumber) {
    if (!validateNumber(playerNumber)) return;

    this.isCorrectNumber(playerNumber);
  }
}

export default Game;
