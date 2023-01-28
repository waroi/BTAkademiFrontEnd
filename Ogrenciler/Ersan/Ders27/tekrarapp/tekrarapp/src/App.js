import "./App.css";
import Row from "react-bootstrap/Row";
import GetActors from "./components/GetActors";
import Appbar from "./components/Appbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Container fluid className="overflow-hidden" style={{ height: "400px" }}>
        <Row className="g-3 mt-5">
          <GetActors />
        </Row>
      </Container>
    </div>
  );
}

export default App;
