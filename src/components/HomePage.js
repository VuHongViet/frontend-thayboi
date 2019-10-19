import React, { Component } from "react";
import "antd/dist/antd.css";
import { Spin, Button } from "antd";
import axios from "axios";
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  loadData = () => {
    this.setState({
      loading: true
    });
    axios
      .get("http://5d95bbe0a824b400141d1e9a.mockapi.io/api/products")
      .then(res => {
        this.setState({
          loading: false
        });
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <Button type="primary" htmlType="submit" onClick={this.loadData}>
          Load
        </Button>
        <Spin spinning={this.state.loading} tip="Loading..."></Spin>
      </div>
    );
  }
}

export default HomePage;
