const Calculator = require("../libraries/Calculator")
const calc = new Calculator()

const subNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  const result = calc.sub(num1, num2)
  res.json(result)
};

module.exports = { subNumbers }