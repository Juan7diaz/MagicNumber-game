import { getStorage } from "./interactionsDB.js";

const ARRAY_DATA_PLAYAR = JSON.parse(getStorage("dataGame"));

if (ARRAY_DATA_PLAYAR[0].state === "Failed") {
  document.getElementById("title").textContent = "Game Over";
  document.getElementById("subtitle").textContent =
    "A veces se gana, a veces se pierde";
}

if (ARRAY_DATA_PLAYAR[0].state === "Win") {
  document.getElementById("title").textContent = "You Win";
  document.getElementById("subtitle").textContent = "Felicidades, has ganado";
}

const buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", () => {
  const URLactual = window.location.href;
  console.log(URLactual);
  if (URLactual.includes("github")) {
    window.location.href = "https://juan7diaz.github.io/MagicNumber-game/";
  } else {
    window.location.href = "/";
  }
});

const currentResult = document.getElementById("current_result");
currentResult.innerHTML = `
<ul class="result">
  <li class="result__date">Fecha: ${ARRAY_DATA_PLAYAR[0].date}</li>
  <li class="result__ramdon_number">Numero correcto: ${ARRAY_DATA_PLAYAR[0].ramdon_number}</li>
  <li class="result__state">Intentos: ${ARRAY_DATA_PLAYAR[0].total_hearts}</li>
  <li class="result__attempts">intentos anteriores: ${ARRAY_DATA_PLAYAR[0].attempts}</li>
</ul>
`;

const previousResult = document.getElementById("previous_result");
if (ARRAY_DATA_PLAYAR.length > 1) {
  for (let i = 1; i < ARRAY_DATA_PLAYAR.length; i++) {
    previousResult.innerHTML += `
  <ul class="result">
    <li class="result__date">Fecha: ${ARRAY_DATA_PLAYAR[i].date}</li>
    <li class="result__ramdon_number">Estado: ${ARRAY_DATA_PLAYAR[i].state}</li>
    <li class="result__ramdon_number">Numero correcto: ${ARRAY_DATA_PLAYAR[i].ramdon_number}</li>
    <li class="result__state">Intento ganador: ${ARRAY_DATA_PLAYAR[i].total_hearts}</li>
    <li class="result__attempts">intentos: ${ARRAY_DATA_PLAYAR[i].attempts}</li>
  </ul>
  <hr>
  `;
  }
} else {
  previousResult.innerHTML = `
  <h3 class="result__title">No hay resultados anteriores, sigue jugando :D</h3>`;
}
