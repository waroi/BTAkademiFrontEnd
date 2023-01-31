import { Badge, Card, Col, Row } from "react-bootstrap";
import { useCategory } from "../context/CategoryContext";
import { useProduct } from "../context/ProductContext";

const MenuProcessesView = () => {
  const { products } = useProduct();
  const { categories } = useCategory();

  return (
    <>
      <Row md={4} className="g-4">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card className="h-100 shadow-lg">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="fw-light fst-italic">
                    {product.description}
                  </Card.Text>
                  <Card.Text>Fiyat:{product.price}₺</Card.Text>
                </Card.Body>
                <Card.Footer>
                  Stok Durumu:
                  {product.visible ? (
                    <Badge bg="success">Var</Badge>
                  ) : (
                    <Badge bg="danger">YOK</Badge>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MenuProcessesView;
