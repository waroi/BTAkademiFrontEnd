import "./App.css";

function App() {
  let name = "Varol";
  return (
    <div className="App">
      <h1>Merhaba {name ? name : "React"}</h1>
    </div>
  );
}

export default App;
