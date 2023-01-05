import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardText from "./components/CardText";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import SendPost from "./components/SendPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <SendPost />
        <Card>
          <CardHeader>Deneme Başlık</CardHeader>
          <CardBody>
            <CardText>Deneme İçerik</CardText>
          </CardBody>
          <CardFooter>
            <small>
              <i className="fa-solid fa-calendar-days"></i>Tarih:
            </small>
            <small>
              <i className="fa-solid fa-at"></i>Yazar:
            </small>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}

export default App;
