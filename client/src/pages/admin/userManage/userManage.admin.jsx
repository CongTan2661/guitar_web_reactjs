import React, { Component } from "react";
import UserItem from "../../../components/admin/userItem.component";

class UserManage extends Component {
  render() {
    return (
        <div>
            <div className="row d-flex justify-content-center">     {/*Quản lý người dùng*/}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className = "text-center">STT</th>
                            <th className = "text-center">Mã</th>
                            <th className = "text-center">Tên người dùng</th>
                            <th className = "text-center">Ngày sinh</th>
                            <th className = "text-center">Email</th>
                            <th className = "text-center">SĐT</th>
                            <th className = "text-center">Địa chỉ</th>
                            <th className = "text-center">Tiền thanh toán</th>
                            <th className = "text-center">Tài khoảng</th>
                            <th className = "text-center">Mật khẩu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>
                                <input type="text" className="form-control" aria-describedby="helpId"/>
                            </th>
                            <th>
                                <input type="text" className="form-control" aria-describedby="helpId"/>
                            </th>
                            <th>
                                <input type="text" className="form-control" aria-describedby="helpId"/>
                            </th>
                            <th></th>
                            <th>
                                <input type="text" className="form-control" aria-describedby="helpId"/>
                            </th>
                            <th></th>
                            <th>
                                <select className="form-control">
                                    <option>Tất cả</option>
                                    <option>Tăng dần</option>
                                    <option>Giảm dần</option>
                                </select>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                        <UserItem/>
                        <UserItem/>
                        <UserItem/>
                    </tbody>
                </table>  
            </div>
            <br/>
        </div>
    );
  }
}

export default UserManage;
