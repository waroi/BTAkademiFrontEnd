import { useRef } from "react";
import { Tabs, Tab, Table, Button, Alert, Form, Col } from "react-bootstrap";
import { useOrder } from "../context/OrderContext";
import { useProduct } from "../context/ProductContext";

export const OrderService = () => {
  return (
    <Tabs defaultActiveKey="waitOrder" className="mb-3">
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
  const { orders } = useOrder();

  return (
    <Table hover size="sm">
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
        {orders.map((order) =>
          order.length !== 0 ? (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerRoom}</td>
              <td>{order.productName}</td>
              <td>
                Fiyat:{order.productPrice}₺ - Adet:{order.productQuantity}
              </td>
              <td>{order.isDone}</td>
              <td className="d-flex gap-2">
                <Button variant="success" size="sm" className="rounded-0">
                  <i className="fa-solid fa-check"></i>
                </Button>
                <Button variant="info" size="sm" className="rounded-0">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
                <Button variant="danger" size="sm" className="rounded-0">
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
  const { orders } = useOrder();
  return (
    <Table hover size="sm">
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
        {orders.map((order) =>
          order.length !== 0 ? (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerRoom}</td>
              <td>{order.productName}</td>
              <td>
                <Col>Fiyat:{order.productPrice}₺</Col>
                <Col>Adet:{order.productQuantity}</Col>
              </td>
              <td>{order.isDone}</td>
              <td className="d-flex gap-2">
                <Button variant="primary" size="sm" className="rounded-0">
                  <i className="fa-solid fa-arrow-left"></i>
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

export const AddOrder = () => {
  const { addOrder } = useOrder();
  const { products } = useProduct();
  // const productIdRef = useRef();
  const productNameRef = useRef();
  // const productPriceRef = useRef();
  // const productQuantityRef = useRef();
  // const isDoneRef = useRef();
  // const customerRoomRef = useRef();
  // const customerIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      // productId: productIdRef.current.value,
      productName: productNameRef.current.value,
      // productPrice: productPriceRef.current.value,
      // productQuantity: productQuantityRef.current.value,
      // customerIdRef: customerIdRef.current.value,
      // customerRoom: customerRoomRef.current.value,
      // isDone: isDoneRef.current.value,
    };
    addOrder(productNameRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Ürün</Form.Label>
        <Form.Select size="sm" ref={productNameRef}>
          {products.map((product) => {
            return (
              <option key={product.id} value={product.id}>
                {product.name} - {product.price}₺
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sparişi ekle
      </Button>
    </Form>
  );
};
