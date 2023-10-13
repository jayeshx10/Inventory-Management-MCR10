import { Link } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext } from "/src/contexts/ProductsContext";
import { Sidebar } from "/src/components/Sidebar/Sidebar";
import "./Departments.scss";

export const Departments = () => {
  const { setFilters } = useContext(ProductsContext);

  const DepartmentCard = ({ departmentName }) => {
    return (
      <div className="department__card">
        <button
          onClick={() =>
            setFilters((prevState) => ({
              ...prevState,
              department: departmentName
            }))
          }
        >
          <Link to="/products" className="department__card-link">
            {departmentName}
          </Link>
        </button>
      </div>
    );
  };

  return (
    <div className="departments">
      <Sidebar />
      <div className="departments__container">
        <DepartmentCard departmentName="Kitchen" />
        <DepartmentCard departmentName="Clothing" />
        <DepartmentCard departmentName="Toys" />
      </div>
    </div>
  );
};
