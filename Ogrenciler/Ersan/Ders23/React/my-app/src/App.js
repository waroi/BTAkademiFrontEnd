import "./App.css";
import Deneme from "./Deneme";
import DenemeClass from "./DenemeClass";

function App() {
  let name = "Ersan";
  return (
    <div className="App">
      <h1>Merhaba {name ? name : "React"}</h1>
      <Deneme isim={name} number="5" />
      <DenemeClass isim={name} />
    </div>
  );
}

export default App;
