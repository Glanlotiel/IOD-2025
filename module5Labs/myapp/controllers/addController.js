const Calculator = require("../libraries/Calculator")
const calc = new Calculator()

const addNumbers = (req, res) => {
  const { num1, num2 } = req.body;
  const result = calc.add(num1, num2)
  res.json(result)
};

module.exports = { addNumbers }