import "./App.css";
import Router from "./routes/Router";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Router />
      </Container>
    </div>
  );
}

export default App;
