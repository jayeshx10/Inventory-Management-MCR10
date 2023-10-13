import { Routes, Route, Link } from "react-router-dom";

import "./styles.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Departments } from "./Pages/Departments/Departments";
import { Products } from "./Pages/Products/Products";
import { ProductPage } from "./Pages/ProductPage/ProductPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductPage />} />
      </Routes>
    </div>
  );
}
