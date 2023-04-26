import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Paths from "./components/Paths";
import Login from "./components/login";
import Register from "./components/register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./containers/Dashboard";
import AddProduct from "./components/Products/AddProduct";
import EditProduct from "./components/Products/EditProduct";
import EditCategory from "./components/Category/EditCategory";
import AddCategory from "./components/Category/AddCategory";

function App() {
  // const [token,setToken]=useState(false)

  return (
    <>
      {/* <Dashboard /> */}

      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route
          element={
            <>
              <Dashboard />
              <Outlet />
            </>
          }
        >
          <Route path="/dashboard" element={<AddProduct />} />
          <Route path="/dashboard/AddProduct" element={<AddProduct />} />
          <Route path="/dashboard/EditProduct" element={<EditProduct />} />
          <Route path="/dashboard/EditCategory" element={<EditCategory />} />
          <Route path="/dashboard/AddCategory" element={<AddCategory />} />
        </Route>
        <Route path="/*" element={<h1>Oops,404 Error Page Not Found</h1>} />
      </Routes>
      {/* <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link> */}
    </>
  );
}

export default App;
