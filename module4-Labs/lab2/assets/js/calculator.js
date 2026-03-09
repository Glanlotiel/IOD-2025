// recieves input & calculates
function Calculator(float1, operation, float2, numDecimals = 2) {
  const factor = 10 ** numDecimals;
  const num1 = Math.round(parseFloat(float1) * factor);
  const num2 = Math.round(parseFloat(float2) * factor);

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = (num1 * num2) / factor;
      break;
    case "/":
      result = (num1 / num2) * factor;
      break;
    default:
      return NaN;
  }
  return result / factor;
}

// Recieve Data
document.getElementById("calculatorT").addEventListener("click", function (e) {
  // If Clear : clear
  if (e.target.id === "clearResult") {
    document.getElementById("calculatorResult").innerHTML = "0";
  }
  //If = : calculate
  else if (e.target.id === "=") {
    let number = document
      .getElementById("calculatorResult")
      .textContent.match(/[\d.]+|[+\-*/]/g);
    let result = Calculator(number[0], number[1], number[2]);
    document.getElementById("calculatorResult").textContent = `${result}`;
  }
  // Code to update display otherwise
  else {
    if (document.getElementById("calculatorResult").textContent == "0") {
      document.getElementById("calculatorResult").textContent =
        e.target.textContent;
    } else {
      document.getElementById("calculatorResult").textContent +=
        e.target.textContent;
    }
  }
});
