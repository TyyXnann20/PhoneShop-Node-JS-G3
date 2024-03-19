import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetData from "./pages/getdata/GetData";
import Viewdata from "./pages/viewdata/Viewdata";
import InserProduct from "./pages/insertdata/InsertProduct";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout from "./MasterPage/LayoutOne";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/viewdata/:code" element={<Viewdata />} />
          <Route path="/insert" element={<InserProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
