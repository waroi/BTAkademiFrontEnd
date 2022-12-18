import "./App.css";
import Deneme from "./components/Deneme";

function App() {
  let name = "Ersan";
  return (
    <div className="App">
      <h1>Hoşgeldin {name}</h1>
      <Deneme isim={name} />
    </div>
  );
}

export default App;
