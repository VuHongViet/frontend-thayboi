import React, { Component } from "react";
import { Col, Menu, Icon, Avatar, Layout, Row } from "antd";
import logo from "./../image/bat-quai.jpg";
import "antd/dist/antd.css";
export class LeftSideBar extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <Row type="flex" style={{ flexDirection: "column" }}>
        <Col
          xs={2}
          style={{
            color: "#000",
            fontSize: "30px",
            paddingLeft: "10px"
          }}
        >
          <Icon
            className="trigger"
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.toggle}
          />
        </Col>
        <Row>
          <Col
            xs={this.state.collapsed ? 22 : 0}
            md={this.state.collapsed ? 0 : 6}
            style={{ transition: "all 1s 0.2s ease-out" }}
          >
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1", "sub2"]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Avatar src={logo} />
                    <span style={{ fontWeight: "bold" }}>Vũ Hồng Việt</span>
                  </span>
                }
              >
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon
                        type="smile"
                        style={{ color: "#000", fontSize: "20px" }}
                      />
                      <span style={{ fontWeight: "bold" }}>
                        Quản Lý Tài Khoản
                      </span>
                    </span>
                  }
                >
                  <Menu.Item key="1">Thông Tin Cá Nhân</Menu.Item>
                  <Menu.Item key="2">Đổi Mật Khẩu</Menu.Item>
                </SubMenu>
                <Menu.Item key="5">
                  <Icon
                    type="file-done"
                    style={{ color: "#000", fontSize: "20px" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1890ff"
                    }}
                  >
                    Danh Sách Thầy Bói Đã Thêm
                  </span>
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon
                    type="form"
                    style={{ color: "#000", fontSize: "20px" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1890ff"
                    }}
                  >
                    Nhận Xét Của Tôi
                  </span>
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon
                    type="logout"
                    style={{ color: "#000", fontSize: "20px" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#1890ff"
                    }}
                  >
                    Đăng Xuất
                  </span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default LeftSideBar;
