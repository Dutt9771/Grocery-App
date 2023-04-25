import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './components/Layout/navbar';
import AddProduct from './components/Products/AddProduct';
import Header from './components/Layout/Header';
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>
    </>
  );
}

export default App;
