import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Register from "../register";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "../../containers/Dashboard";
import AddProduct from "../Products/AddProduct";
// import { useState } from "react";
export default function Navbar() {

  // const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            background: "white",
            padding: "5px 0 5px 5px",
            fontSize: "20px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Register
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/header"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Header
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/side"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Sidebar
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/header" element={<Dashboard />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/side" element={<AddProduct />} />
          {/* <Route path="/login" element={<Login />} /> */}
          
          {/* <Route exact path="/about" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
