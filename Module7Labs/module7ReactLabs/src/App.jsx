import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <AppRoutes />
      <section>
        <div>
          <p> This tells me I'm Rendered!</p>
        </div>
      </section>
    </>
  );
}

export default App;
