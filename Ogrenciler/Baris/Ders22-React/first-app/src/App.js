import "./App.css";
import Deneme from './components/Deneme'
import DenemeClass from "./components/DenemeClass";

function App() {
  let name ="Varol";
  return (
    <div className="App">
      <h1>Merhaba {name? name: "React"}</h1>
      <Deneme isim={name} a="5"/>
      <DenemeClass isim = {name}/>
    </div>
  );
}

export default App;
