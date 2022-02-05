// import { yellow } from "@material-ui/core/colors";
import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./footer.component.scss";
class Footer extends Component {
  render() {
    return (
      <div id="contact">
        <div className="footer">
          <div className="row">
            <div className="col-md-9 info">
              <div className="infoAdmin">
                <div className="tenShop">
                  <h1>
                    <b>ÂN ĐIỂN</b>
                  </h1>
                </div>
                <div className="tenAdmin">
                  <span style={{ color: "yellow" }}>Chủ Shop</span>: Trương Hiếu
                </div>
                <div className="phoneNumber">
                  <span style={{ color: "yellow" }}>Số Điện Thoại</span>:
                  0987654321
                </div>
                <div className="place">
                  <span style={{ color: "yellow" }}>Địa Chỉ</span>: 13 Đồng
                  Phươc Huyến, T.T Đông Phú, H Quế Sơn, Quảng Nam
                </div>
              </div>
              <div className="banDo">
                {/*  eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.4836764300962!2d108.2161540146111!3d15.672459654111877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169fcbc676cf8e7%3A0xe2b2d014bd4482ef!2zMTMgxJDhu5NuZyBQaMaw4bubYyBIdXnhur9uLCBUVC4gxJDDtG5nUGjDuiwgUXXhur8gU8ahbiwgUXXhuqNuZyBOYW0sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1630330338841!5m2!1svi!2s"
                  width={600}
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-3 lienHe">
              <ul>
                <li>
                  <FacebookIcon
                    style={{
                      color: "blue",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      fontSize: "3rem",
                    }}
                  />
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="link">
                    Link FB
                  </a>
                </li>
                <li>
                  <YouTubeIcon
                    style={{
                      color: "red",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      fontSize: "3rem",
                    }}
                  />{" "}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="" className="link">
                    Link Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
