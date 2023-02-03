import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import { useProduct } from "../context/ProductContext";

const MenuProcessesView = () => {
  const { products } = useProduct();

  return (
    <Container className="shadow-lg p-5 rounded">
      <h4 className="text-center ">Menu İşlemleri Sayfası</h4>
      <Row md={2} className="g-4 mt-5">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card className="h-100 ">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="fw-light fst-italic">
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fa-solid fa-cubes"></i> Stok Durumu:
                    {product.visible ? (
                      <Badge bg="success"> Var </Badge>
                    ) : (
                      <Badge bg="danger"> YOK </Badge>
                    )}
                  </div>

                  <div className="bg-primary text-white rounded-pill p-2">
                    <i className="fa-solid fa-coins"></i> Fiyat:
                    <span className="fw-bolder">{product.price}</span>
                    <span>₺</span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MenuProcessesView;
