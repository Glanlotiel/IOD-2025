import { useState } from "react";
import "./Emoji.css";

const MOODS = ["😄", "😢"];

export default function Emoji() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % MOODS.length);
  };

  return (
    <div className="emoji">
      <span className="emoji__face">{MOODS[index]}</span>
      <button className="emoji__button" onClick={handleClick}>
        Change Mood
      </button>
    </div>
  );
}
