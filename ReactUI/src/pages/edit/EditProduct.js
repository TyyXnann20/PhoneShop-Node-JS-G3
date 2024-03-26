import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Space, Table, Image, message } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import axios from "axios";

const EditProduct = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8090/getone/${code}`)
      .then((res) => {
        setData(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);
  console.log(data[0]);
  const EditProduct = (e) => {
    e.preventDefault();
    var http = `http://localhost:8090/updateProduct/${code}`;
    axios
      .post(http, data[0])
      .then((res) => {
        message.success(res.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1200);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid bg-light vh-100 vw-100">
      <div className="row">
        <h1>Edit Product {code}</h1>
        <div className="d-flex justify-content-end">
          <Link to="/" class="btn btn-success">
            Home
          </Link>
        </div>

        {data.map((item) => {
          return (
            <form onSubmit={EditProduct}>
              <div class="mb-3">
                <label class="form-label"> Category Code</label>
                <input
                  value={item.category_id}
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setData([{ ...data[0], category_id: e.target.value }]);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label"> Product Name</label>
                <input
                  value={item.name}
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setData([{ ...data[0], name: e.target.value }]);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label"> Quantity</label>
                <input
                  value={item.quantity}
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setData([{ ...data[0], quantity: e.target.value }]);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label"> Price</label>
                <input
                  value={item.price}
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setData([{ ...data[0], price: e.target.value }]);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label"> Description</label>
                <input
                  value={item.description}
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setData([{ ...data[0], description: e.target.value }]);
                  }}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Edit Now
              </button>
            </form>
          );
        })}
      </div>
    </div>
  );
};
export default EditProduct;
