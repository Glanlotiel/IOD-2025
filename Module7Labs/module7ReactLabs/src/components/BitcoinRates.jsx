import { useState } from "react";
import { useBitcoinRate } from "../hooks/useBitcoinRate";
import { useMood } from "../context/MoodContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
const moods = ["😄", "😢"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, status } = useBitcoinRate(currency);
  const { index } = useMood(); // ← reads from context

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate {moods[index]}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Failed to load rate.</p>}
      {status === "success" && (
        <p>
          1 BTC = {rate.toLocaleString()} {currency}
        </p>
      )}
    </div>
  );
}
