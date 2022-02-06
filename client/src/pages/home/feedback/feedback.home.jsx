import React from "react";
import "./feedback.home.scss";
export default function FeedBack() {
  return (
    <div>
      <h1>
        <b>Phản hồi khách hàng</b>
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="contentFb">
            <div className="avatar">
              <img
                src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                alt=""
              />
            </div>
            <div className="cmt">
              <i>"Sản phẩm chất lượng tốt"</i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contentFb">
            <div className="avatar">
              <img
                src="https://freenice.net/wp-content/uploads/2021/08/Anh-avatar-dep-doc-chat-ngau-lam-hinh-dai-dien.jpg"
                alt=""
              />
            </div>
            <div className="cmt">
              <i>"Giá cả hợp lý, âm thanh tuyệt vời !!!"</i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contentFb">
            <div className="avatar">
              <img
                src="https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg"
                alt=""
              />
            </div>
            <div className="cmt">
              <i>"Sản phẩm đẹp nhưng giao hàng hơi lâu"</i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contentFb">
            <div className="avatar">
              <img
                src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/avatar-cho-con-gai-mau-hong-cute.jpg"
                alt=""
              />
            </div>
            <div className="cmt">
              <i>"Goodjob, shop ơi"</i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contentFb">
            <div className="avatar">
              <img
                src="https://sinitc.com/data/news/9/2021/09/01/Sinict-AVT-Chibi-1.jpeg"
                alt=""
              />
            </div>
            <div className="cmt">
              <i>"Shop ổn định !!!"</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
