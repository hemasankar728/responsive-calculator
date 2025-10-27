       const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-calc");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = "";
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (firstNumber !== "") {
        operator = value;
        display.value += " " + value + " ";
      }
      return;
    }

    if (value === "=") {
      if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
        result = eval(`${firstNumber}${operator}${secondNumber}`);
        display.value = result;
        firstNumber = result;
        secondNumber = "";
        operator = "";
      }
      return;
    }

    // Number input handling
    if (operator === "") {
      firstNumber += value;
    } else {
      secondNumber += value;
    }

    display.value += value;
  });
});
