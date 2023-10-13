import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./ProductPage.scss";
import { ProductsContext } from "/src/contexts/ProductsContext";

export const ProductPage = () => {
  const { productID } = useParams();
  const { productsDB } = useContext(ProductsContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const result = productsDB.find(
      (product) => product.id === Number(productID)
    );
    setData(result);
  }, [productsDB]);

  return (
    <>
      <Link to="/products" className="back-link">
        BACK
      </Link>
      <div className="productPage">
        <img src={data?.imageUrl} alt="product" />
        <p>Name: {data?.name}</p>
        <p>Description: {data?.description}</p>
        <p>Price: ${data?.price}</p>
        <p>Stock: {data?.Stock}</p>
        <p>Supplier: {data?.supplier}</p>
        <p>Delivered: {data?.delivered}</p>
      </div>
    </>
  );
};
