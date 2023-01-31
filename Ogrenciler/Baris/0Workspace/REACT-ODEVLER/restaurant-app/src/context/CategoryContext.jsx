import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";
const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const fetchdata = async () => {
    await api()
      .get("/categories")
      .then((response) => setCategories(response.data));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const addCategory = async (name) => {
    const response = await api().post("/categories", { name });
    setCategories([...categories, response.data]);
  };
  const deleteCategory = async (id) => {
    await api().delete("/categories/" + id);
    const response = categories.filter((category) => category.id !== id);
    setCategories(response);
  };

  const value = {
    categories,
    setCategories,
    addCategory,
    deleteCategory,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
