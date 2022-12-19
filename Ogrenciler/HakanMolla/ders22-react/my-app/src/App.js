
import './App.css';
import Deneme from "./components/deneme"
function App() {
  let name ="Hakan";
  return (
    <div className='App'>
      <h1>Hoşgeldiniz {name}</h1>
      <Deneme isim={name}/>

    </div>


  );
}

export default App;
