import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  LoginOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Divider, Image } from "antd";
import "./LayoutMaster.css";
import AppHeader from "./AppHeader";
const { Header, Sider, Content } = Layout;

const LayoutMaster = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleChangeMenu = (item) => {
    navigate(item.key);
  };
  const menuUser = [
    {
      key: "1",
      label: <a>Profile</a>,
    },
    {
      key: "2",
      label: <a>Change password</a>,
    },
    {
      key: "3",
      label: <a>Logout</a>,
      icon: <LoginOutlined />,
      onClick: null,
    },
  ];

  const menu = [
    {
      key: "/",
      icon: <MenuFoldOutlined />,
      label: "Home",
    },
    {
      key: "/insert",
      icon: <UsergroupAddOutlined />,
      label: "Insert",
    },
    {
      key: "/category",
      icon: <UploadOutlined />,
      label: "Category",
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ color: "white" }}
      >
        <div>
          <Image
            width={"100%"}
            height={"100%"}
            src="https://th.bing.com/th/id/OIP.FGm49EGb5E_XcdzyamfcagHaHa?rs=1&pid=ImgDetMain"
          ></Image>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={menu}
          onClick={handleChangeMenu}
        />
      </Sider>

      <Layout>
        <div
          className="headerLayoutOne"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <MenuUnfoldOutlined
            style={{ fontSize: 26, paddingLeft: 20 }}
            onClick={() => setCollapsed(!collapsed)}
          />

          <div>
            <Dropdown
              style={{ width: 150 }}
              menu={{
                items: menuUser,
              }}
              placement="bottomLeft"
            >
              <Button type="link" className={"iconProfile"}>
                <UserOutlined />

                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="mainBody">{props.children}</div>
      </Layout>
    </Layout>
  );
};
export default LayoutMaster;
