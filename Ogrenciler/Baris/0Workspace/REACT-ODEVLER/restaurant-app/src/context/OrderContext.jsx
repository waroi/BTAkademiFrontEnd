import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const fetchData = async () => {
    await api()
      .get("/orders")
      .then((response) => setOrders(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addOrder = async (productName) => {
    const response = await api().post("/orders", { productName });
    setOrders([...orders, response.data]);
  };
  const updateOrder = async (id, quantity, isDone) => {
    const response = await api().put(`/orders/${id}`, {
      quantity,
      isDone,
    });
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
    updateOrder,
    deleteOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
