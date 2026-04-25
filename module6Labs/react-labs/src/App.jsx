import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import SingleCat from "./components/SingleCat";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";
function App() {
  return (
    <>
      <div>
        <Greeting name="John">Welcome to my app!</Greeting>
      </div>
      <Greeting name="Sarah">Good to see you!</Greeting>
      <Calculator></Calculator>
      <Emoji></Emoji>
      <BigCats></BigCats>
    </>
  );
}

export default App;
