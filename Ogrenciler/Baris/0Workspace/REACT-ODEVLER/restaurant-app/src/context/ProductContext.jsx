import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    await api()
      .get("/products")
      .then((response) => setProducts(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = async (
    categoryId,
    name,
    price,
    description,
    gr,
    visible
  ) => {
    const response = await api().post(`/products`, {
      categoryId,
      name,
      price,
      description,
      gr,
      visible,
    });
    setProducts([...products, response.data]);
  };
  const deleteProduct = async (id) => {
    await api().delete(`/products/${id}`);
    const response = products.filter((product) => product.id !== id);
    setProducts(response);
  };
  const value = {
    products,
    setProducts,
    addProduct,
    deleteProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
