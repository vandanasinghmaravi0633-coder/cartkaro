import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Shield,
  ShoppingBag,
  LogOut,
} from "lucide-react";

import "../assets/style.css";

function Sidebar() {
  const navigate = useNavigate();

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");              
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className="link">
            <LayoutDashboard className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users" className="link">
            <Users className="icon" /> Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products" className="link">
            <Package className="icon" /> Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders" className="link">
            <ShoppingBag className="icon" /> Orders
          </NavLink>
        </li>
      </ul>

      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut className="icon" /> Logout
        </button>
      </div>  
    </div>
  );
}

export default Sidebar;
