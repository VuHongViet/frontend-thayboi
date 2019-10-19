import React, { Component } from "react";
import { Col, Menu, Icon } from "antd";
import "antd/dist/antd.css";
export class RightSideBar extends Component {
  render() {
    const { SubMenu } = Menu;
    return (
      <Col md={6}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" theme="twoTone" />
                <span style={{ fontWeight: "bold" }}>Trang Chủ</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup key="g2" title="Item2">
              <Menu.Item key="1">Option 3</Menu.Item>
              <Menu.Item key="2">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="bank" theme="twoTone" />
                <span style={{ fontWeight: "bold" }}>Trang Chủ 2</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="SubMenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" theme="twoTone" />
                <span style={{ fontWeight: "bold" }}>Trang Chủ 3</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    );
  }
}

export default RightSideBar;
