import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GetProduct from "../components/GetProduct";
import GetCategory from "../components/GetCategory";

const SettingsView = () => {
  return (
    <>
      <h4 className="p-3 text-center bg-light bg-gradient rounded shadow-lg">
        Ayarlar Sayfası
      </h4>
      <Row>
        <Col>
          <GetCategory />
        </Col>
        <Col>
          <GetProduct />
        </Col>
      </Row>
    </>
  );
};

export default SettingsView;
