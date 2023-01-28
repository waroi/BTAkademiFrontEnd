import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetProduct from "../components/GetProduct";
import GetCategory from "../components/GetCategory";

const SettingsView = () => {
  return (
    <Row>
      <Col>
        <GetCategory />
      </Col>
      <Col>
        <GetProduct />
      </Col>
    </Row>
  );
};

export default SettingsView;
