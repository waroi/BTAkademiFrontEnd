import GetActors from "../components/GetActors";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const HomeView = () => {
  return (
    <Container fluid className="overflow-hidden" style={{ height: "1200px" }}>
      <Row className="g-3 mt-5">
        <GetActors />
      </Row>
    </Container>
  );
};

export default HomeView;
