import { Badge, Card, Col, Row } from "react-bootstrap";

import { useProduct } from "../context/ProductContext";

const MenuProcessesView = () => {
  const { products } = useProduct();

  return (
    <>
      <h4 className="text-center shadow-lg p-2 rounded bg-light bg-gradient">
        Menu İşlemleri Sayfası
      </h4>
      <Row md={2} className="g-4">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card className="h-100 shadow-lg bg-light">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="fw-light fst-italic">
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <div>
                    <i className="fa-solid fa-cubes"></i> Stok Durumu:
                    {product.visible ? (
                      <Badge bg="success"> Var </Badge>
                    ) : (
                      <Badge bg="danger"> YOK </Badge>
                    )}
                  </div>

                  <div>
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
    </>
  );
};

export default MenuProcessesView;
