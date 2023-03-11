import {
  validateNumber,
  isCorrectPlayerNumber,
  showHearts,
  showPreviousAttempts,
} from "./helpers.js";

class Game {
  constructor() {
    //cantidad de vidas
    this.activeHearts = 5;
    this.totalHearts = 5;

    //numero aleatorio
    this.ramdon_number = this.generateRandomNumber();
    console.log(this.ramdon_number);

    //numeros ya ingresados
    this.attemptsPrevious = [];

    //iniciar juego
    this.eventEnter();
    showHearts(this.activeHearts, this.totalHearts);
  }

  //eventos
  eventEnter() {
    const inputPalabra = document.getElementById("input");
    inputPalabra.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.main(this.getPlayerNumber());
      }
    });
  }

  //generar numero aleatorio entre 1 y 100
  generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // obtener numero ingresado por el usuario
  getPlayerNumber() {
    const inputPalabra = document.getElementById("input");
    const number = inputPalabra.value;
    inputPalabra.value = "";
    return parseInt(number);
  }

  // validar numero ingresado por el usuario es el correcto
  isCorrectNumber(number) {
    return isCorrectPlayerNumber(number, this.ramdon_number);
  }

  // disminuir corazones
  decreaseHearts() {
    this.activeHearts--;
    showHearts(this.activeHearts, this.totalHearts);
  }

  // funcion principal
  main(playerNumber) {
    // validar numero ingredado sea permitido
    if (!validateNumber(playerNumber)) return;

    // ingresar numero en array de intentos
    this.attemptsPrevious.push(playerNumber);
    showPreviousAttempts(this.attemptsPrevious);

    // muestra ayuda al usuario y disminuye vidas
    if (!this.isCorrectNumber(playerNumber)) {
      this.decreaseHearts();
      if (this.activeHearts === 0) {
        console.log("perdiste");
      }
      return;
    }

    console.log("ganaste");
    //ya es correcto
    //guardar puntaje
    //cambiar pantalla
  }
}

export default Game;
