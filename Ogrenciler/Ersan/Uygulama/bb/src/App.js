import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Card from "./components/Cards";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardText from "./components/CardText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Card>
          <CardHeader>Deneme Başlık</CardHeader>
          <CardBody>
            <CardText>Deneme İçerik</CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
