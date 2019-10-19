import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import Style from "../css/SlideForm.module.css";
import Login from "./Login";
import Register from "./Register";
export class ToggleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false
    };
  }
  addClass = () => {
    this.setState({
      addClass: true
    });
  };

  removeClass = () => {
    this.setState({
      addClass: false
    });
  };

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        className={`${Style.container} ${
          this.state.addClass ? `${Style.signUpActive}` : ""
        }`}
      >
        <div className={Style.overlayContainer}>
          <div className={Style.overlay}>
            <div className={Style.overlayLeft}>
              <h1>Welcom Back!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <Button
                onClick={this.addClass}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold"
                }}
                htmlType="submit"
              >
                Sign Up
              </Button>
            </div>

            <div className={Style.overlayRight}>
              <h1>Hello Friend</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <Button
                onClick={this.removeClass}
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold"
                }}
                htmlType="submit"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <Register />
        <Login />
      </div>
    );
  }
}

export default Form.create({ name: "Toggle" })(ToggleForm);
