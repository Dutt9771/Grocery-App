import { Routes, Route, Outlet } from "react-router-dom";
import AddProduct from "./Products/AddProduct";
import EditProduct from "./Products/EditProduct";
import EditCategory from "./Category/EditCategory";
import AddCategory from "./Category/AddCategory";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../containers/Dashboard";
export default function Paths() {
  return (
    <>
      <Routes element={<PrivateRoute />}>
        
      </Routes>
    </>
  );
}
