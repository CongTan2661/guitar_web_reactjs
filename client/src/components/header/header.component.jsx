import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./header.component.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { getInfoAction } from "../../store/actions/user.action";
import { connect } from "react-redux";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "../../../node_modules/js-cookie/dist/js.cookie";
function Header(props) {
  const [name, setName] = useState({
    email: "",
    nameUser: null,
    message: "",
    token: null,
  });
  let history = useHistory();
  useEffect(() => {
    if (props.info.email !== name.email) {
      props.dispatch(getInfoAction(Cookies.get().token));
      if (props.info.nameUser) {
        setName({
          email: props.info.email,
          nameUser: props.info.nameUser,
          token: Cookies.get().token,
        });
      }
    }
    if (props.info.message !== name.message && !name.token) {
      props.dispatch(getInfoAction(Cookies.get().token));
      if (props.info.message) {
        setName({ message: props.info.message });
      }
    }
  }, [name.email, name.message, name.token, props]);
  const logOutUser = async () => {
    // document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // history.push("/signin");
    await Cookies.remove("token");
    setName({ token: Cookies.get().token });
  };
  const getNameUser = () => {
    if (!name.nameUser) {
      return (
        <div className="col-md-2 cart" style={{ padding: "20px 0" }}>
          <a href="/signin">
            <Button variant="contained" style={{ backgroundColor: "#37df33" }}>
              Đăng Nhập
            </Button>{" "}
          </a>
        </div>
      );
    }
    return (
      <div className="col-md-2 cart">
        <div className="infoUser ">
          <div className="titleUser">
            <b>{name.nameUser}</b>
          </div>
          <div className="selectItem">
            <div className="account">
              <Link to="/information">
                <span className="iconAccount">{<AccountCircleIcon />}</span>{" "}
                <span
                  className="nameAccount"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Thông Tin Cá Nhân
                </span>
              </Link>
            </div>
            <div className="infoCart">
              <span className="iconCart">{<ShoppingBasketIcon />}</span> Giỏ
              Hàng
            </div>
            <div className="logOut" onClick={logOutUser}>
              <span className="iconLogout">{<LogoutIcon />}</span> Đăng Xuất
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="menu">
        <div className="row ">
          <div className="col-md-2 logo">
            <Link to="/">
              <img src="/img/logoShop.jpg" alt="" />
            </Link>
          </div>
          <div className="col-md-8 content">
            <ul>
              <li>
                <a href="#home">Trang Chủ</a>
              </li>
              <li>
                <a href="#product">Sản Phẩm</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Liên Hệ</a>
              </li>
            </ul>
          </div>

          {/* <span>{name.user}</span> */}
          {getNameUser()}
          {/* <Button variant="contained" color="secondary">
              <AddShoppingCartIcon />
            </Button> */}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    info: state.user.info,
  };
};
export default connect(mapStateToProps)(Header);
