import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import Style from "../css/SlideForm.module.css";
import { BrowserRouter, Link } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtemail: "",
      txtname: "",
      txtpass: ""
    };
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Mật khẩu nhập lại không khớp");
    } else {
      callback();
    }
  };
  handleSubmitRegister = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        localStorage.setItem("register", JSON.stringify(this.state));
        console.log(this.state);
      }
    });
    console.log(this.state);
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
      <Form
        className={`${Style.signUp} ${Style.form}`}
        onSubmit={this.handleSubmitRegister}
      >
        <h1>Đăng Kí</h1>
        <div>Sign up using social networks</div>
        <div className={Style.socialContainer}>
          <BrowserRouter>
            <Link to="/" className={Style.socialFacebook}></Link>
            <Link to="/" className={Style.socialGoogle}></Link>
          </BrowserRouter>
        </div>
        <div className={Style.loginForm}>
          <div className={Style.loginFormTitle}>OR</div>
        </div>

        <Form.Item hasFeedback style={{ width: "100%", textAlign: "left" }}>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Tên không được để trống" }]
          })(
            <Input
              style={{
                width: "calc(100% - 25px)"
              }}
              prefix={<Icon type="user" />}
              placeholder="Nhập Tên"
              name="txtname"
              onChange={this.onChange}
            />
          )}
        </Form.Item>

        <Form.Item hasFeedback style={{ width: "100%", textAlign: "left" }}>
          {getFieldDecorator("email", {
            rules: [
              { required: true, message: "Mời bạn nhận địa chỉ Email" },
              { type: "email", message: "Không phải địa chỉ Email" }
            ]
          })(
            <Input
              style={{
                width: "calc(100% - 30px)"
              }}
              prefix={<Icon type="mail" />}
              placeholder="Nhập Email"
              name="txtemail"
              onChange={this.onChange}
            />
          )}
        </Form.Item>

        <Form.Item hasFeedback style={{ width: "100%", textAlign: "left" }}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Mời bạn nhập Password" }]
          })(
            <Input.Password
              style={{
                width: "calc(100% - 30px)"
              }}
              prefix={<Icon type="lock" />}
              placeholder="Nhập Password"
              name="txtpass"
              onChange={this.onChange}
            />
          )}
        </Form.Item>

        <Form.Item hasFeedback style={{ width: "100%", textAlign: "left" }}>
          {getFieldDecorator("confirm", {
            rules: [
              { required: true, message: "Mời bạn nhập Password" },
              { validator: this.compareToFirstPassword }
            ]
          })(
            <Input.Password
              style={{
                width: "calc(100% - 30px)"
              }}
              prefix={<Icon type="lock" />}
              placeholder="Xác Nhận Password"
              name="txtpass"
              onChange={this.onChange}
            />
          )}
        </Form.Item>

        <Button
          style={{
            backgroundColor: "#009345",
            color: "#fff",
            fontWeight: "bold"
          }}
          htmlType="submit"
        >
          Đăng Kí
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: "Register" })(Register);
