import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ProductsContextProvider } from "/src/contexts/ProductsContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductsContextProvider>
      <Router>
        <App />
      </Router>
    </ProductsContextProvider>
  </StrictMode>
);
