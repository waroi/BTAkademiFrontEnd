import "./App.css";
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";
// import { TodoList } from "./components/TodoList";

function App() {
  let name = "Hakan";
  return (
    <div className="App">
      <h1>Merhaba {name ? name : "React"}</h1>
      <Deneme isim={name} number="5" />
      {/* <DenemeClass isim={name} />
      <TodoList /> */}
    </div>
  );
}

export default App;
