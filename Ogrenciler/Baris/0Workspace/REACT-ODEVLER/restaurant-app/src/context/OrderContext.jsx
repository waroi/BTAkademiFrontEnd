import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    await api()
      .get("/orders")
      .then((response) => setOrders(response.data.sort((x, y) => y - x)));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addOrder = async (
    productName,
    productQuantity,
    productPrice,
    customerRoom,
    customerSide,
    isDone
  ) => {
    const response = await api().post("/orders", {
      productName,
      productQuantity,
      productPrice,
      customerRoom,
      customerSide,
      isDone,
    });
    setOrders([...orders, response.data]);
  };
  const isDoneOrder = async (id, isDone) => {
    const response = await api().patch(`/orders/${id}`, { isDone });
    //  orders.filter((order) => order.id !== id);
    setOrders([...orders, response.data]);
  };
  const deleteOrder = async (id) => {
    await api().delete(`/orders/${id}`);
    const response = orders.filter((order) => order.id !== id);
    setOrders(response);
  };
  const value = {
    orders,
    setOrders,
    addOrder,
    isDoneOrder,
    deleteOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
