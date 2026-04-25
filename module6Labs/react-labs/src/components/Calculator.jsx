import { useState } from "react";
import "./Calculator.css";

const operators = ["+", "−", "×", "÷"];

const calculate = (a, op, b) => {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) return "ERR: INVALID INPUT";
  switch (op) {
    case "+":
      return numA + numB;
    case "−":
      return numA - numB;
    case "×":
      return numA * numB;
    case "÷":
      return numB === 0 ? "ERR: DIV BY ZERO" : numA / numB;
    default:
      return "ERR: UNKNOWN OP";
  }
};

const formatResult = (val) => {
  if (typeof val === "string") return val;
  const rounded = parseFloat(val.toFixed(10));
  return rounded.toString();
};

export default function Calculator() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState(null);
  const [blink, setBlink] = useState(false);

  const handleCalculate = () => {
    const res = calculate(numA, op, numB);
    setResult(formatResult(res));
    setBlink(true);
    setTimeout(() => setBlink(false), 600);
  };

  const handleClear = () => {
    setNumA("");
    setNumB("");
    setOp("+");
    setResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleCalculate();
  };

  return (
    <div className="calc">
      <div className="calc__screen">
        <div className="calc__label">CALCULATOR v1.0 // READY</div>
        <div className={`calc__result ${blink ? "calc__result--blink" : ""}`}>
          {result !== null
            ? `> ${numA} ${op} ${numB} = ${result}`
            : "> AWAITING INPUT_"}
        </div>
      </div>

      <div className="calc__body">
        <div className="calc__row">
          <label className="calc__field">
            <span className="calc__field-label">NUM_A</span>
            <input
              className="calc__input"
              type="number"
              value={numA}
              onChange={(e) => setNumA(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="0"
            />
          </label>

          <div className="calc__ops">
            <span className="calc__field-label">OP</span>
            <div className="calc__op-group">
              {operators.map((o) => (
                <button
                  key={o}
                  className={`calc__op ${op === o ? "calc__op--active" : ""}`}
                  onClick={() => setOp(o)}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>

          <label className="calc__field">
            <span className="calc__field-label">NUM_B</span>
            <input
              className="calc__input"
              type="number"
              value={numB}
              onChange={(e) => setNumB(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="0"
            />
          </label>
        </div>

        <div className="calc__actions">
          <button
            className="calc__btn calc__btn--execute"
            onClick={handleCalculate}
          >
            [ CALCULATE ]
          </button>
          <button className="calc__btn calc__btn--clear" onClick={handleClear}>
            [ CLR ]
          </button>
        </div>
      </div>
    </div>
  );
}
