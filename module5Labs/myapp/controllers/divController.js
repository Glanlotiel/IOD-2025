const Calculator = require("../libraries/Calculator")
const calc = new Calculator()

const divNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  const result = calc.div(num1, num2)
  res.json(result)
};

module.exports = { divNumbers }