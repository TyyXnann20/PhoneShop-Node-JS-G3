import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetData from "./pages/getdata/GetData";
import Viewdata from "./pages/viewdata/Viewdata";
import InserProduct from "./pages/insertdata/InsertProduct";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import Layout from "./MasterPage/LayoutOne";
import EditProduct from "./pages/edit/EditProduct";
import HomePage from "./clientSide/Homepage";
import ListProducts from "./clientSide/ListProductPage";

function App() {
  const getIsAdmin = localStorage.getItem("isAdmin") == 1;
 // console.log(getIsAdmin);
  return (
    <BrowserRouter>
      {getIsAdmin && (
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/viewdata/:code" element={<Viewdata />} />
          <Route path="/editdata/:code" element={<EditProduct />} />
          <Route path="/insert" element={<InserProduct />} />
        </Routes>
      )}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
