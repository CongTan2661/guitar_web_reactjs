import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInfoAction,
  userLoginAction,
} from "../../store/actions/user.action";
import { withRouter } from "react-router";
import swal from "sweetalert";
import "./signin.pages.scss";
import TextField from "@mui/material/TextField";
import Cookies from "../../../node_modules/js-cookie/dist/js.cookie";
// import backgroundShop from "img/guitarBG.jpg";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    await this.props.dispatch(userLoginAction(this.state));
    if (this.props.noticeSignIn.token) {
      Cookies.set("token", this.props.noticeSignIn.token, {
        expires: 1,
      });
    }
    // await this.props.dispatch(getInfoAction());

    // document.getElementById("formLogin").reset();
    let { status } = this.props.noticeSignIn;
    switch (status) {
      case "OK":
        swal({
          title: "Good Job!",
          text: this.props.noticeSignIn.message,
          icon: "success",
          timer: 1500,
        });
        const { history } = this.props;
        // console.log(history);
        history.push("/");
        break;
      case "PW ERROR":
        swal({
          title: "Failed!",
          text: this.props.noticeSignIn.message,
          icon: "error",
          timer: 2000,
        });
        break;
      case "TK ERROR":
        swal({
          title: "Error!",
          text: this.props.noticeSignIn.message,
          icon: "error",
          timer: 2000,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div>
        <div
          className="formBg"
          style={{ backgroundImage: `url('img/guitarBG.jpg')` }}
        ></div>
        <form className="loginForm" id="formLogin" onSubmit={this.onSubmit}>
          <div className="logoGuitar">
            <img src="/img/logoShop.jpg" alt="" />
          </div>
          <div className="areaLogin">
            <TextField
              label="Username"
              type="text"
              name="email"
              onChange={this.onChange}
              className="signin__input"
              // className="form-control"
            />
            <div className="pass">
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={this.onChange}
                className="signin__input"
              />
            </div>
          </div>
          <div className="footerForm text-center">
            <button type="submit" className="btn btn-success">
              Đăng Nhập
            </button>
          </div>
          <div className="signup">
            <span>
              Bạn chưa có tài khoản? <a href="/signup">Đăng ký ngay</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    noticeSignIn: state.user.isLogin,
    info: state.user.info,
  };
};
export default connect(mapStateToProps)(withRouter(SignIn));
