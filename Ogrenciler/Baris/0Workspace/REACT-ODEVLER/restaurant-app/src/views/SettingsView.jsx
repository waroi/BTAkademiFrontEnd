import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetProduct from "../components/GetProduct";
import GetCategory from "../components/GetCategory";
import { Container } from "react-bootstrap";

const SettingsView = () => {
  return (
    <Container className="p-5 rounded shadow-lg">
      <h4 className="text-center ">Ayarlar Sayfası</h4>
      <Row className="mt-5">
        <Col>
          <GetCategory />
        </Col>
        <Col>
          <GetProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsView;
