import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
