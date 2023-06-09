import { getStorage } from "./interactionsDB.js";
import { changeScreen } from "./helpers.js";

const ARRAY_DATA_PLAYAR = JSON.parse(getStorage("dataGame"));

if (ARRAY_DATA_PLAYAR[0].state === "Failed") {
  document.getElementById("title").textContent = "Game Over";
  document.getElementById("subtitle").textContent = "Llorindel :c";
}

if (ARRAY_DATA_PLAYAR[0].state === "Win") {
  document.getElementById("title").textContent = "You Win";
  document.getElementById("subtitle").textContent = "Celebralo curramba";
}

const buttonBack = document.getElementById("back");
buttonBack.addEventListener("click", () => {
  changeScreen("/");
});

const currentResult = document.getElementById("current_result");
currentResult.innerHTML = `
<ul class="result">
  <li class="result__date">
    <strong>Fecha:</strong> ${ARRAY_DATA_PLAYAR[0].date}
  </li>
  <li class="result__ramdon_number">
    <strong>Numero correcto:</strong> ${ARRAY_DATA_PLAYAR[0].ramdon_number}
  </li>
  <li class="result__state">
    <strong>${
      ARRAY_DATA_PLAYAR[0].state === "Win"
        ? "Intento ganador:"
        : "Cantidad vida"
    }</strong>
    ${
      ARRAY_DATA_PLAYAR[0].state === "Win"
        ? ARRAY_DATA_PLAYAR[0].attempts.length
        : ARRAY_DATA_PLAYAR[0].total_hearts
    }
  </li>
  <li class="result__attempts">
    <strong>intentos anteriores:</strong> ${ARRAY_DATA_PLAYAR[0].attempts}
  </li>
</ul>
`;

const previousResult = document.getElementById("previous_result");
if (ARRAY_DATA_PLAYAR.length > 1) {
  for (let i = 1; i < ARRAY_DATA_PLAYAR.length; i++) {
    previousResult.innerHTML += `
  <ul class="result">
    <li class="result__date">
      <strong>Fecha:</strong> ${ARRAY_DATA_PLAYAR[i].date}
    </li>
    <li class="result__state">
      <strong>Estado:</strong> ${ARRAY_DATA_PLAYAR[i].state}
    </li>
    <li class="result__magic_number">
      <strong>Numero magico:</strong> ${ARRAY_DATA_PLAYAR[i].ramdon_number}
    </li>
    <li class="result">
      <strong>
        ${
          ARRAY_DATA_PLAYAR[i].state === "Win"
            ? "Intento ganador:"
            : "Cantidad vida"
        }
      </strong>
      ${
        ARRAY_DATA_PLAYAR[i].state === "Win"
          ? ARRAY_DATA_PLAYAR[i].attempts.length
          : ARRAY_DATA_PLAYAR[i].total_hearts
      }
    </li>
    <li class="result__attempts">
      <strong>intentos:</strong> ${ARRAY_DATA_PLAYAR[i].attempts}
    </li>
  </ul>
  <hr>
  `;
  }
} else {
  previousResult.innerHTML = `
  <h3 class="result__title">No hay resultados anteriores, sigue jugando :D</h3>`;
}
