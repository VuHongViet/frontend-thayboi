import React, { Component } from "react";
import "antd/dist/antd.css";
import {} from "antd";
export class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null
    };
  }

  render() {
    const dataSource = [
      {
        id: "1",
        name: "Nodejs",
        price: "900000",
        status: true
      },
      {
        id: "2",
        name: "PHP",
        price: "900000",
        status: true
      },
      {
        id: "3",
        name: "React cơ bản",
        price: "1900000",
        status: false
      },
      {
        id: "4",
        name: "MongoDB",
        price: "1100000",
        status: false
      },
      {
        id: "5",
        name: "MongoDB",
        price: "1100000",
        status: false
      },
      {
        id: "6",
        name: "React Native",
        price: "1100000",
        status: false
      },
      {
        id: "7",
        name: "VueJS",
        price: "1300000",
        status: false
      },
      {
        id: "8",
        name: "Angular",
        price: "1300000",
        status: false
      },
      {
        id: "9",
        name: "Android",
        price: "1300000",
        status: false
      },
      {
        id: "10",
        name: "IOS",
        price: "1300000",
        status: false
      },
      {
        id: "11",
        name: "PLC",
        price: "800000",
        status: false
      }
    ];
    const columns = [
      {
        title: "STT",
        dataIndex: "id"
      }
    ];
    return <div></div>;
  }
}

export default TableRow;
