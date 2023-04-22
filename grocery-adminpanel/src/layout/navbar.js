import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Register from "../components/register";
export default function Navbar() {
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
              Login
            </NavLink>
          </div>
          <div style={{ margin: "10px" }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
              })}
            >
              Register
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Register />} />
          {/* <Route exact path="/about" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
