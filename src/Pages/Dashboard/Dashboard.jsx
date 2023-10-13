import { useState, useEffect, useContext } from "react";
import { Sidebar } from "/src/components/Sidebar/Sidebar";

import "./Dashboard.scss";
import { ProductsContext } from "/src/contexts/ProductsContext";

export const Dashboard = () => {
  const [dashboardState, setDashboardState] = useState({
    totalStock: 0,
    totalDelivered: 0,
    lowStock: 0
  });

  const { productsDB } = useContext(ProductsContext);

  useEffect(() => {
    setDashboardState({
      totalStock: productsDB.reduce((acc, curr) => acc + curr.stock, 0),
      totalDelivered: productsDB.reduce((acc, curr) => acc + curr.delivered, 0),
      lowStock: productsDB.reduce(
        (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc),
        0
      )
    });
  }, [productsDB]);

  const DashboardCard = ({ color, count, text }) => {
    return (
      <div className="dashboard__card">
        <p>
          <span style={{ color: color }}>{count}</span>
        </p>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <DashboardCard
          color="green"
          count={dashboardState.totalStock}
          text="Total Stock"
        />
        <DashboardCard
          color="orange"
          count={dashboardState.totalDelivered}
          text="Total Delivered"
        />
        <DashboardCard
          color="red"
          count={dashboardState.lowStock}
          text="Low Stock"
        />
      </div>
    </div>
  );
};
