import React, { Component } from "react";
import "./admin.pages.scss";
import ProductManage from "./productManage/productManage.admin";
import UserManage from "./userManage/userManage.admin";
import {Route,Link, Switch, BrowserRouter as Router} from "react-router-dom";
import {withRouter} from "react-router"

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            status : true
        }
    }
    render() {
        const {url, path} = this.props.match;
        return (
            <Router>
                <div>
                    <div className = 'container'>
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 bdr">
                                <div className={`row mgt mgb`}>
                                    <Link to = {`${url}/product-manage`} className="btn btn-secondary">Quản lý sản phẩm</Link>
                                </div>
                                <div className={`row mgt mgb`}>
                                    <Link to = {`${url}/user-manage`} className="btn btn-secondary">Quản lý người dùng</Link>
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                <Switch>
                                    <Route path={`${path}/product-manage`} exact={false}><ProductManage /></Route>
                                    <Route path={`${path}/user-manage`} exact={false}><UserManage/></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(Admin);
