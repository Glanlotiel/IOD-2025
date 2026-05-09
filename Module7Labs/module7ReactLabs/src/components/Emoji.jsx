import { useMood } from "../context/MoodContext";
import "./Emoji.css";

const moods = ["😄", "😢"];

export default function Emoji() {
  const { index, setIndex } = useMood();

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % moods.length);
  };

  return (
    <div className="emoji">
      <span className="emoji__face">{moods[index]}</span>
      <button className="emoji__button" onClick={handleClick}>
        Change Mood
      </button>
    </div>
  );
}
