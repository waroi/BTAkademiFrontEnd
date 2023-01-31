import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  return <MenuContext.Provider>{children}</MenuContext.Provider>;
};

export const useMenu = () => useContext(MenuContext);
