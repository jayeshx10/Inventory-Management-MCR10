import { Link } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar__ul">
        <li key="1" className="sidebar__li">
          <Link to="/" className="sidebar__links">
            DASHBOARD
          </Link>
        </li>
        <li key="2" className="sidebar__li">
          <Link to="/departments" className="sidebar__links">
            DEPARTMENTS
          </Link>
        </li>
        <li key="3" className="sidebar__li">
          <Link to="/products" className="sidebar__links">
            PRODUCTS
          </Link>
        </li>
      </ul>
    </div>
  );
};
