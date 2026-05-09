import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";
import { MoodProvider } from "../context/MoodContext";

export default function BitcoinPage() {
  return (
    <>
      <div>
        <MoodProvider>
          <Emoji></Emoji>
          <BitcoinRates></BitcoinRates>
        </MoodProvider>
      </div>
    </>
  );
}
