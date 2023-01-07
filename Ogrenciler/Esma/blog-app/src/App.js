import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import CardFooter from "./components/CardFooter";
import CardBody from "./components/CardBody";
import CardHeader from "./components/CardHeader";
import CardText from "./components/CardText";
import Post from "./components/Form";
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();
  const itemsRef = useRef([]);
  inputRef.current.value;

  return (
    <div className="App">
      <Navbar />
      <Post />
      <Container>
        <Card>
          <CardHeader>Deneme Başlık</CardHeader>
          <CardBody>
            <CardText>Deneme İçerik</CardText>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </Container>
    </div>
  );
}

export default App;
