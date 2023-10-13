import { createContext, useState, useEffect } from "react";
import { addProduct, inventoryData } from "/src/backend/inventoryData.js";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [productsDB, setProductsDB] = useState([]);

  useEffect(() => {
    const localStorageObject = localStorage.getItem("data");

    if (localStorageObject) {
      setProductsDB(JSON.parse(localStorageObject));
    } else {
      localStorage.setItem("data", JSON.stringify(inventoryData));
    }
  }, []);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal((prevState) => !prevState);

  const updateState = (product) => {
    setProductsDB((prevState) => [...prevState, product]);
    localStorage.setItem("data", JSON.stringify([...productsDB, product]));
  };

  const [filters, setFilters] = useState({
    department: "",
    lowStocks: false,
    sorting: ""
  });

  const productsPostDepartmentFilter = filters?.department
    ? productsDB.filter((product) => product.department === filters.department)
    : productsDB;

  const productsPostLowStocks = filters?.lowStocks
    ? productsPostDepartmentFilter.filter((product) => product.stock <= 10)
    : productsPostDepartmentFilter;

  const productsSorter = (type) => {
    if (type === "name") {
      return productsPostLowStocks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "price") {
      return productsPostLowStocks.sort((a, b) => a.price - b.price);
    } else if (type === "stock") {
      return productsPostLowStocks.sort((a, b) => a.stock - b.stock);
    }
  };

  const productsPostSorting = filters?.sorting
    ? productsSorter(filters.sorting)
    : productsPostLowStocks;

  return (
    <ProductsContext.Provider
      value={{
        productsDB,
        setProductsDB,
        updateState,
        filters,
        setFilters,
        productsPostSorting,
        modal,
        toggleModal
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
