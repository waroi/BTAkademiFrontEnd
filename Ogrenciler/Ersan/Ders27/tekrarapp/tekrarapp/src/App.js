import "./App.css";

import Appbar from "./components/Appbar";

import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Router />
    </div>
  );
}

export default App;
