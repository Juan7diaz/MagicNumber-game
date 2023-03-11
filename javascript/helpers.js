export const showMsg = (msg, classP) => {
  const msgElement = document.getElementById("container_msg");
  msgElement.innerHTML = `<p class="${classP}">${msg}</p>`;
};

export const validateNumber = (number) => {
  if (number === "") {
    showMsg("Debes ingresar un número", "error");
    return false;
  }

  if (isNaN(number)) {
    showMsg("Debes ingresar un número", "error");
    return false;
  }

  if (number < 1 || number > 100) {
    showMsg("Debes ingresar un número entre 1 y 100", "error");
    return false;
  }

  showMsg("", "msg");
  return true;
};

export const isCorrectPlayerNumber = (number, ramdon_number) => {
  if (number > ramdon_number) {
    showMsg("El número es menor", "error");
    return false;
  }

  if (number < ramdon_number) {
    showMsg("El número es mayor", "error");
    return false;
  }

  if (number == ramdon_number) {
    showMsg("¡Ganaste!", "success");
    return true;
  }
};
