import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Space, Table, Image } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import axios from "axios";
const GetData = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    displayData();
  });
  const displayData = () => {
    var url = "http://localhost:8090/getProducts";
    axios
      .get(url)
      .then((res) => {
        setListData(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const allColumns = [
    {
      title: "ID",
      key: "product_id",
      dataIndex: "product_id",
    },
    {
      title: "ProductName",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Image",
      key: "image",
      render: (item) => {
        return (
          <Image
            width={80}
            height={80}
            src={"http://localhost/img_path/" + item.image}
          />
        );
      },
    },
    {
      title: "Action",
      key: "Action",
      render: (item, items, index) => {
        return (
          <Space>
            <Link to={`/viewdata/${item.product_id}`}>
              <Button size="small" type="primary">
                <EditFilled />
              </Button>
            </Link>
            <Link to={`/editdata/${item.product_id}`}>
              <Button size="small" type="primary">
                EDIT
              </Button>
            </Link>
            <Link to="/">
              <Button size="small" danger type="primary">
                <DeleteFilled />
              </Button>
            </Link>
          </Space>
        );
      },
    },
  ];
  return (
    <div className="container-fluid bg-light vh-100 vw-100">
      <div className="row">
        <h3>List All Phones</h3>
        <div className="d-flex justify-content-end">
          <Link to="/insert" class="btn btn-success">
            Insert
          </Link>
        </div>
        <Table bordered={true} columns={allColumns} dataSource={listData} />
      </div>
    </div>
  );
};

export default GetData;
