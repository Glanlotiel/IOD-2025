class Calculator {
  constructor() {
    this.id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  #calculate = (num1, operation, num2, numDecimals = 2) => {
    const factor = 10 ** numDecimals;
    const n1 = Math.round(parseFloat(num1) * factor);
    const n2 = Math.round(parseFloat(num2) * factor);

    let result;

    switch (operation) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = (n1 * n2) / factor;
        break;
      case "/":
        result = (n1 / n2) * factor;
        break;
      default:
        return NaN;
    }

    return result / factor;
  };

  add(num1, num2) {
    const value = this.#calculate(num1, "+", num2);
    this.#log(value);
    return value;
  }

  sub(num1, num2) {
    const value = this.#calculate(num1, "-", num2);
    this.#log(value);
    return value;
  }

  mult(num1, num2) {
    const value = this.#calculate(num1, "*", num2);
    this.#log(value);
    return value;
  }

  div(num1, num2) {
    const value = this.#calculate(num1, "/", num2);
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
