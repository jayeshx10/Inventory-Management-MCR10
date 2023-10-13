import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import "./Products.scss";
import { Modal } from "/src/components/Modal/Modal";
import { Sidebar } from "/src/components/Sidebar/Sidebar";
import { ProductsContext } from "/src/contexts/ProductsContext";

export const Products = () => {
  const {
    filters,
    setFilters,
    modal,
    toggleModal,
    productsPostSorting
  } = useContext(ProductsContext);

  const ProductCard = ({ product }) => {
    const { id, name, imageUrl, description, price, stock, supplier } = product;
    return (
      <div className="productCard">
        <img src={imageUrl} alt="product" />
        <Link to={`/products/${id}`}>
          <p>{name}</p>
        </Link>
        <p>{description}</p>
        <p>${price}</p>
        <p>{stock}</p>
        <p>{supplier}</p>
      </div>
    );
  };

  return (
    <div className="products">
      <Sidebar />
      <div className="products-container">
        <h1>PRODUCTS</h1>
        <header className="header">
          <div>
            <label htmlFor="departments">DEPARTMENTS: </label>
            <select
              className="products__dropdown"
              name="department"
              value={filters.department}
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  department: e.target.value
                }))
              }
            >
              <option value="">All Products</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </select>
            <hr />
            <input
              type="checkbox"
              name="lowStocks"
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  lowStocks: e.target.checked
                }))
              }
            />
            <label htmlFor="lowStocks">LOW STOCK ITEMS</label>
            <hr />

            <label htmlFor="sorting">SORTING: </label>
            <select
              className="products__dropdown"
              name="sorting"
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  sorting: e.target.value
                }))
              }
            >
              <option value="">Sort</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="stock">Stock</option>
            </select>
          </div>

          <button className="button__add" onClick={toggleModal}>
            ADD
          </button>
        </header>
        <ul className="products__ul">
          {productsPostSorting.map((product) => {
            const { id } = product;
            return <ProductCard product={product} key={id} />;
          })}
        </ul>
        {modal && <Modal />}
      </div>
    </div>
  );
};
