const Calculator = require("../libraries/Calculator");
const calc = new Calculator();

const multNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  const result = calc.mult(num1, num2);
  res.json(result);
};

module.exports = { multNumbers };
