import { getStorage } from "./interactionsDB.js";

const datacurrent = JSON.parse(getStorage("dataGame"));

console.log(datacurrent[0].state);

if (datacurrent[0].state === "Failed") {
  document.getElementById("title").textContent = "Game Over";
}

if (datacurrent[0].state === "Win") {
  document.getElementById("title").textContent = "You Win";
}
