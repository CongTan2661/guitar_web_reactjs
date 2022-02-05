import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { withRouter } from "react-router";
import {
  validationEmail,
  validationNameUser,
  validationPasswd,
} from "../../components/validation/validation.components";
import { userSignUpAction } from "../../store/actions/user.action";
import "./signup.pages.scss";
class SignUp extends Component {
  state = {
    nameUser: "",
    email: "",
    password: "",
    placeUser: "",
    rePassword: null,
    dirty: false,
    errors: {
      nameUser: "",
      email: "",
      rePassword: "",
      password: "",
      placeUser: "",
    },
  };
  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let errors = this.state.errors;
    const validName = RegExp(validationNameUser);
    const validEmail = RegExp(validationEmail);
    const validPasswd = RegExp(validationPasswd);
    switch (name) {
      case "nameUser":
        errors.nameUser =
          value !== ""
            ? value.length > 5
              ? validName.test(value)
                ? "noError"
                : "error"
              : "errorLength"
            : "errorNull";
        break;
      case "email":
        errors.email =
          value !== ""
            ? validEmail.test(value)
              ? "noError"
              : "error"
            : "errorNull";
        break;
      case "password":
        errors.password =
          value !== ""
            ? validPasswd.test(value)
              ? "noError"
              : "error"
            : "errorNull";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      errors,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    if (
      this.state.errors.email === "noError" &&
      this.state.errors.nameUser === "noError" &&
      this.state.errors.password === "noError" &&
      this.state.password === this.state.rePassword &&
      this.state.placeUser !== ""
    ) {
      await this.props.dispatch(
        userSignUpAction({
          nameUser: this.state.nameUser,
          email: this.state.email,
          password: this.state.password,
          placeUser: this.state.placeUser,
        }),
      );
      if (this.props.noticeSignUp.message) {
        swal({
          title: "Error!",
          text: this.props.noticeSignUp.message,
          icon: "error",
          timer: 1500,
        });
      } else {
        await swal({
          title: "Good Job!",
          text: "Đăng ký thành công",
          icon: "success",
          timer: 1500,
        });
        this.props.history.push("/signin");
      }
    } else {
      swal("Failed!", "Điền đầy đủ thông tin", "error");
    }
  };

  render() {
    return (
      <div className="bgSignUp">
        <form className="formSignUp" id="signUpForm" onSubmit={this.onSubmit}>
          <h1 className="text-center">ĐĂNG KÝ</h1>
          <div className="form-group">
            <label>
              <b>Email</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="email"
              onChange={this.onChange}
            />
            <div className={this.state.errors.email}>
              {this.state.errors.email === "error"
                ? "* Vui lòng nhập đúng định dạng"
                : this.state.errors.email === "errorNull"
                ? "* Vui lòng không để trống Email"
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Mật Khẩu</b>
            </label>
            <input
              type="password"
              onChange={this.onChange}
              className="form-control"
              name="password"
              placeholder=""
            />
            <div className={this.state.errors.password}>
              {this.state.errors.password === "error"
                ? "* Cần có ít nhất 1 ký tự đặt biệt, 1 chữ hoa, 1 chữ thường và 1 số "
                : this.state.errors.password === "errorNull"
                ? "* Vui lòng nhập mật khẩu"
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Nhập Lại Mật Khẩu</b>
            </label>
            <input
              type="password"
              onChange={(e) => {
                this.setState({ rePassword: e.target.value, dirty: true });
              }}
              name="rePassword"
              className="form-control"
              placeholder=""
            />
            <div
              id="err"
              className={
                this.state.rePassword !== ""
                  ? this.state.dirty
                    ? this.state.password === this.state.rePassword
                      ? "noError"
                      : "error"
                    : "noError"
                  : "errorNull"
              }
            >
              * Mật khẩu không đúng
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Tên của bạn </b>
            </label>
            <input
              type="text"
              className="form-control"
              name="nameUser"
              placeholder="VD: Nguyễn Văn A,..."
              onChange={this.onChange}
            />
            <div className={this.state.errors.nameUser}>
              {this.state.errors.nameUser === "error"
                ? "* Vui lòng không nhập ký tự số"
                : this.state.errors.nameUser === "errorNull"
                ? "* Vui lòng nhập tên của bạn"
                : this.state.errors.nameUser === "errorLength"
                ? "* Nhập tên nhiều hơn 5 kí tự"
                : ""}
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Địa chỉ</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="placeUser"
              placeholder="VD: 30 Hùng Vương, Đông Phú, Quế Sơn"
              onChange={this.onChange}
            />
          </div>
          <div className="footer__signUp  text-right ">
            <button type="submit" className="btn btn-primary">
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    noticeSignUp: state.user.isSignup,
  };
};
export default connect(mapStateToProp)(withRouter(SignUp));
