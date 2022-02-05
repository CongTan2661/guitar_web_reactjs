import React, { Component } from "react";
import "./user.pages.scss";
import { connect } from "react-redux";
import { getProductItemAction } from "../../store/actions/product.action";
class User extends Component {
  state = {
    list: [6, 7],
  };
  getSp = () => {
    for (let i = 0; i < this.state.list.length; i++) {
      this.props.dispatch(getProductItemAction(this.state.list[i]));
      console.log(this.props);
    }
  };
  render() {
    return (
      <>
        <div className="name">{this.getSp()}</div>
      </>

      // <div>
      //     <div className = 'container'>
      //         <div className="row">
      //             <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 bdr">
      //                 <div className="row mgb">
      //                     <button type="button" className="btn btn-secondary">Thông tin cá nhân</button><br/>
      //                     <ul>
      //                         <li className = "mg">
      //                             <a>Hồ sơ</a>
      //                         </li>
      //                         <li className = "mg">
      //                             <a>Đổi mật khẩu</a>
      //                         </li>
      //                     </ul>
      //                 </div>
      //                 <div className="row">
      //                     <button type="button" className="btn btn-secondary">Đơn hàng</button>
      //                 </div>
      //             </div>
      //             <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
      //                 <div className="row d-flex justify-content-center">
      //                     <h2>Thông tin cá nhân</h2>
      //                 </div>
      //                 <div className="row d-flex justify-content-center">
      //                     <form>
      //                         <div className="form-row">
      //                             <div className="form-group col-xs-8 col-sm-8 col-md-8 col-lg-8">
      //                                 <label>Họ tên: </label>
      //                                 <input type="text" className="form-control"/>
      //                             </div>
      //                             <div className="form-group col-xs-4 col-sm-4 col-md-4 col-lg-4">
      //                                 <label>Ngày sinh: </label>
      //                                 <input type="text" className="form-control"/>
      //                             </div>
      //                         </div>
      //                         <div className="form-row">
      //                             <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //                                 <label>Email: </label>
      //                                 <input type="text" className="form-control width-700"/>
      //                             </div>
      //                         </div>
      //                         <div className="form-row">
      //                             <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //                                 <label>Số điện thoại: </label>
      //                                 <input type="text" className="form-control"/>
      //                             </div>
      //                         </div>
      //                         <div className="form-row">
      //                             <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //                                 <label>Địa chỉ: </label>
      //                                 <input type="text" className="form-control"/>
      //                             </div>
      //                         </div>
      //                         <button type="submit" className="btn btn-primary">Cập nhật</button>
      //                     </form>
      //                 </div>
      //                 <br/>
      //                 <div className="row d-flex justify-content-center">
      //                     <form>
      //                         <div className="form-row">
      //                             <div className="form-group col-md-12">
      //                                 <label>Mật khẩu cũ: </label>
      //                                 <input type="text" className="form-control width-500"/>
      //                             </div>
      //                         </div>
      //                         <div className="form-row">
      //                             <div className="form-group col-md-12">
      //                                 <label>Mật khẩu mới: </label>
      //                                 <input type="password" className="form-control"/>
      //                             </div>
      //                         </div>
      //                         <div className="form-row">
      //                             <div className="form-group col-md-12">
      //                                 <label>Nhập lại mật khẩu mới: </label>
      //                                 <input type="password" className="form-control"/>
      //                             </div>
      //                         </div>
      //                         <button type="submit" className="btn btn-primary">Lưu lại</button>
      //                     </form>
      //                 </div>
      //                 <br/>
      //                 <div className="row d-flex justify-content-center">
      //                     <table className="table table-bordered">
      //                         <thead>
      //                             <tr>
      //                                 <th className = "text-center">STT</th>
      //                                 <th className = "text-center">Tên hàng</th>
      //                                 <th className = "text-center">Số lượng </th>
      //                                 <th className = "text-center">Đơn giá</th>
      //                             </tr>
      //                         </thead>
      //                         <tbody>

      //                         </tbody>
      //                     </table>
      //                 </div>
      //             </div>
      //         </div>
      //     </div>
      // </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    info: state.user.info,
    pro: state.product.productItem,
  };
};
export default connect(mapStateToProps)(User);
