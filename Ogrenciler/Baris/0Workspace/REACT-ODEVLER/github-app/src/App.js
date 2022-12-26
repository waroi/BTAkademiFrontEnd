import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Badge from "./components/Badge";
import Row from "./components/Row";
import Column from "./components/Column";
import Input from "./components/Input";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column>
            <Card>
              <CardHeader>Deneme</CardHeader>
              <CardBody>
                <Input />
                <Button primary>
                  Deneme
                  <Badge light>New</Badge>
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Deneme</CardHeader>
              <CardBody>
                <Input />
                <Button success>
                  Deneme
                  <Badge light>New</Badge>
                </Button>
              </CardBody>
            </Card>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
