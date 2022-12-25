import './App.css';
import Deneme from "./components/Deneme"
import DenemeClass from './components/DenemeClass';
import  {Add} from "./components/Add";

function App() {
  let name = "Hakan";
  return (
    <div className="App">
      <h1>Merhaba {name ? name:"React"}</h1>
      <Deneme isim={name} a="5" />
      <DenemeClass  isim={name}/>
      <Add/>
    </div>
  );
}

export default App;
