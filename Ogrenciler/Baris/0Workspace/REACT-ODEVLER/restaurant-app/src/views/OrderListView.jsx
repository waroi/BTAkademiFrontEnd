import { OrderService } from "../components/OrdersService";
import { Container } from "react-bootstrap";

const OrderListView = () => {
  return (
    <Container className="bg-white p-5 shadow-lg rounded">
      <h4 className="text-center">Sipariş Sayfası</h4>
      <OrderService />
    </Container>
  );
};

export default OrderListView;
