import { Routes, Route } from "react-router-dom";
import AddProduct from './Products/AddProduct';
import EditProduct from './Products/EditProduct';
import EditCategory from './Category/EditCategory';
import AddCategory from './Category/AddCategory';
import Registration from './register';
import Login from "./login";
import Register from "./register";
export default function Paths(){
  
    return(
        <>
        <Routes>
          {/* <Route path="/" element={<Register />} /> */}
          {/* <Route path="/header" element={<Dashboard />} /> */}
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
          <Route path="/EditCategory" element={<EditCategory />} />
          <Route path="/AddCategory" element={<AddCategory />} />
          {/* <Route path="/login" element={<Login />} /> */}
          
          {/* <Route exact path="/about" element={<Dashboard />} /> */}
        </Routes> 
        <Routes>

          <Route path="/Login" element={<Login />} />     
               <Route path="/Registration" element={<Registration />} />

        </Routes>
        </>
    )
}