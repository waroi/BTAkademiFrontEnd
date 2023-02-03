import { useEffect, useRef, useState } from "react";
import {
  Tabs,
  Tab,
  Table,
  Button,
  Alert,
  Form,
  Col,
  Spinner,
  Row,
  Card,
  Badge,
  ListGroup,
} from "react-bootstrap";
import { useOrder } from "../context/OrderContext";
import { useProduct } from "../context/ProductContext";

export const OrderService = () => {
  return (
    <Tabs defaultActiveKey="waitOrder" className="mb-3 mt-5">
      <Tab eventKey="waitOrder" title="Bekleyen Siparişler">
        <WaitOrder />
      </Tab>
      <Tab eventKey="completedOrder" title="Tamamlanmış Siparişler">
        <CompletedOrder />
      </Tab>
      <Tab eventKey="addOrder" title="Sipariş Ekle">
        <AddOrder />
      </Tab>
    </Tabs>
  );
};

export const WaitOrder = () => {
  const { orders, isDoneOrder, deleteOrder } = useOrder();
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(true);
  }, [orders]);
  return (
    <Table hover size="sm" responsive>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Oda</th>
          <th>Ürün</th>
          <th>Fiyat/Miktar</th>
          <th>Durum</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {orders
          .filter((order) => order.isDone !== true)
          .map((order) =>
            order.length !== 0 ? (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {order.customerSide}-{order.customerRoom}
                </td>
                <td>{order.productName}</td>
                <td>
                  Top.Ücr:
                  {Number(order.productPrice) * Number(order.productQuantity)}₺
                  - Adet:
                  {order.productQuantity}
                </td>
                <td>
                  <Spinner animation="grow" variant="success" size="sm" />
                  <span>Hazırlanıyor</span>
                </td>
                <td className="d-flex gap-2">
                  <Button
                    onClick={() => {
                      isDoneOrder(order.id, isDone);
                    }}
                    variant="success"
                    size="sm"
                    className="rounded-0"
                  >
                    <i className="fa-solid fa-check"></i>
                  </Button>
                  <Button
                    onClick={() => {
                      deleteOrder(order.id);
                    }}
                    variant="danger"
                    size="sm"
                    className="rounded-0"
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </Button>
                </td>
              </tr>
            ) : (
              <Alert key="success" variant="success">
                Bekleyen herhangi bir sipariş bulunmamaktadır.
              </Alert>
            )
          )}
      </tbody>
    </Table>
  );
};

export const CompletedOrder = () => {
  const { orders, isDoneOrder } = useOrder();
  const [isDone, setIsDone] = useState(true);
  useEffect(() => {
    setIsDone(false);
  }, [orders]);
  return (
    <Row xs={1} md={2} className="g-2">
      {orders
        .filter((order) => order.isDone !== false)
        .map((order) =>
          order.length !== 0 ? (
            <Col key={order.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    {order.productName}
                    <Badge bg="secondary" pill className="p-2 bg-gradient">
                      Sipariş No:{order.id}
                    </Badge>
                  </Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <i className="fa-solid fa-building"></i> Kısım:
                      {order.customerSide}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fa-solid fa-door-closed"></i> Oda:
                      {order.customerRoom}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fa-solid fa-tag"></i> Fiyat:
                      {Number(order.productPrice) *
                        Number(order.productQuantity)}
                      ₺
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="fa-solid fa-list-ol"></i> Adet:
                      {order.productQuantity}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      onClick={() => {
                        isDoneOrder(order.id, isDone);
                      }}
                      variant="primary"
                      size="sm"
                      className="bg-gradient"
                    >
                      <i className="fa-solid fa-arrow-left"></i> Geri Gönder
                    </Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <Alert key="success" variant="success">
              Bekleyen herhangi bir sipariş bulunmamaktadır.
            </Alert>
          )
        )}
    </Row>
  );
};

export const AddOrder = () => {
  const { addOrder } = useOrder();
  const { products } = useProduct();

  const productNameRef = useRef();
  const productQuantityRef = useRef();
  const customerRoomRef = useRef();
  const customerSideRef = useRef();
  const isDone = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const productPrice = products
      .filter((product) => product.name === productNameRef.current.value)
      .map((product) => {
        return product.price;
      });
    addOrder(
      productNameRef.current.value,
      productQuantityRef.current.value,
      productPrice,
      customerRoomRef.current.value,
      customerSideRef.current.value,
      isDone
    );
    productNameRef.current.value = "";
    productQuantityRef.current.value = "";
    customerRoomRef.current.value = "";
    customerSideRef.current.value = "";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Ürün</Form.Label>
        <Form.Select size="sm" ref={productNameRef} required>
          {products.map((product) => {
            return product.visible ? (
              <option key={product.id} value={product.name}>
                {product.name} - {product.price}₺
              </option>
            ) : (
              <option
                key={product.id}
                value={product.name}
                className="text-danger fst-italic"
                disabled
              >
                {product.name} - {product.price}₺
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ürün adet</Form.Label>
        <Form.Control
          type="number"
          placeholder="Adet"
          ref={productQuantityRef}
          size="sm"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Müşteri Tarafı</Form.Label>
        <Form.Select size="sm" ref={customerSideRef} required>
          <option value="Otel">Otel</option>
          <option value="Apart">Apart</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Müşteri Oda</Form.Label>
        <Form.Control
          type="number"
          placeholder="Adet"
          ref={customerRoomRef}
          size="sm"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sipariş ekle
      </Button>
    </Form>
  );
};
