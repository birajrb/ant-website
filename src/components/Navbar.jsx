import { Menu } from "antd";
import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" />
        <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="menuHeader">
          <Menu.Item className="nav-items" key="home">
            Home
          </Menu.Item>
          <Menu.Item className="nav-items" key="about">
            About
          </Menu.Item>
          <Menu.Item className="nav-items" key="contact">
            Contact
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
