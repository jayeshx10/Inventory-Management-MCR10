import { useState, useContext, createContext } from "react";

import "./Modal.scss";
import { ProductsContext } from "/src/contexts/ProductsContext";
import { inventoryData } from "/src/backend/inventoryData.js";

export const ModalContext = createContext();

export const Modal = () => {
  const { updateState, toggleModal } = useContext(ProductsContext);

  const [newProduct, setNewProduct] = useState({
    id: inventoryData.length + 1,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "CLOTH001",
    supplier: "",
    delivered: 0,
    imageUrl:
      "https://4.imimg.com/data4/KS/HD/MY-718120/mens-casual-t-shirts-500x500.jpg"
  });

  const changeHandler = (e) => {
    if (
      e.target.name === "price" ||
      e.target.name === "stock" ||
      e.target.name === "delivered"
    ) {
      setNewProduct((prevState) => ({
        ...prevState,
        [e.target.name]: Number(e.target.value)
      }));
    } else {
      setNewProduct((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateState(newProduct);
    toggleModal();
  };

  return (
    <form className="modal__form" onSubmit={submitHandler}>
      <label className="modal__labels" htmlFor="name">
        Department:
      </label>
      <select
        className="modal__inputs"
        name="department"
        onChange={changeHandler}
      >
        <option value="">Select department</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>

      <label className="modal__labels" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter name here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="description">
        Description:
      </label>
      <input
        type="text"
        name="description"
        placeholder="Enter description here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="price">
        Price:
      </label>
      <input
        type="number"
        name="price"
        placeholder="Enter price here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="stock">
        Stock:
      </label>
      <input
        type="number"
        name="stock"
        placeholder="Enter stock here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="sku">
        SKU:
      </label>
      <input
        type="text"
        name="sku"
        placeholder="Enter sku here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="supplier">
        Supplier:
      </label>
      <input
        type="text"
        name="supplier"
        placeholder="Enter supplier name here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="delivered">
        Delivered:
      </label>
      <input
        type="number"
        name="delivered"
        placeholder="Enter delivered quantity here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <label className="modal__labels" htmlFor="imageUrl">
        Image URL:
      </label>
      <input
        type="text"
        name="imageUrl"
        placeholder="Enter imageUrl here"
        onChange={changeHandler}
        className="modal__inputs"
      />

      <button type="submit" className="modal__add-btn">
        ADD PRODUCT
      </button>
    </form>
  );
};
