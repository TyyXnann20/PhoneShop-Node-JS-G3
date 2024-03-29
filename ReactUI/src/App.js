import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetData from "./pages/getdata/GetData";
import Viewdata from "./pages/viewdata/Viewdata";
import InserProduct from "./pages/insertdata/InsertProduct";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout from "./MasterPage/LayoutOne";
import EditProduct from "./pages/edit/EditProduct";

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/viewdata/:code" element={<Viewdata />} />
          <Route path="/editdata/:code" element={<EditProduct />} />
          <Route path="/insert" element={<InserProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
