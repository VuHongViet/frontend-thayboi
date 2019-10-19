import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Menu, Icon, Card, Rate } from "antd";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
export class Card_ThayBoi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { SubMenu } = Menu;
    const { Meta } = Card;
    return (
      <Row style={{ marginTop: "30px" }}>
        <LeftSideBar />
        <Col md={12}>
          <Row
            style={{
              width: "100%",
              padding: "0 2%"
            }}
          >
            <Row type="flex" gutter={16} justify="start">
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={2.5} />
                </Card>
              </Col>
              <Col xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Thầy Vũ Hồng Việt"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Vũ Hồng Việt"
                    description="Cố vấn tối cáo của tổng thống Mỹ Donal Trump"
                  />
                  <Rate allowHalf defaultValue={5} disabled />
                </Card>
              </Col>
            </Row>
          </Row>
        </Col>
        <RightSideBar />
      </Row>
    );
  }
}

export default Card_ThayBoi;
