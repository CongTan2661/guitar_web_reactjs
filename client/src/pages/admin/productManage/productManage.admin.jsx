import React, { Component } from "react";
import { connect } from "react-redux";
import ProductAdd from "../../../components/admin/productAdd.component";
import ProductItem from "../../../components/admin/productItem.component";
import { getProductListAction } from "../../../store/actions/product.action";
import { deleteProductListAction } from "../../../store/actions/product.action";

class ProductManage extends Component {
  state = {
    searchName: "",
    deleteProduct: "",
    fixProduct: "",
    addProduct: "",
  };
  componentDidMount() {
    this.props.dispatch(getProductListAction());
  }
  componentDidUpdate() {
    if (
      this.props.deleteProduct !== this.state.deleteProduct ||
      this.props.fixProduct !== this.state.fixProduct ||
      this.props.addProduct !== this.state.addProduct
    ) {
      this.props.dispatch(getProductListAction());
      this.setState({
        deleteProduct: this.props.deleteProduct,
        fixProduct: this.props.fixProduct,
        addProduct: this.props.addProduct,
      });
    }
  }
  onDelete = (id) => {
    this.props.dispatch(deleteProductListAction(id));
  };
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let { products } = this.props;
    const { searchName } = this.state;
    if (searchName) {
      products = products.filter((product) => {
        return (
          product.nameProduct
            .toLowerCase()
            .indexOf(searchName.toLowerCase()) !== -1
        );
      });
    }

    return (
      <div style={{ paddingTop: "100px" }}>
        <div className="row d-flex justify-content-center">
          <h2>Thêm sản phẩm</h2>
        </div>
        <div className="row d-flex justify-content-center">
          {" "}
          {/*Quản lý sản phẩm*/}
          <ProductAdd />
        </div>
        <div className="row d-flex justify-content-center">
          {" "}
          {/*Quản lý sản phẩm*/}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Mã sp</th>
                <th className="text-center">Tên sản phẩm</th>
                <th className="text-center">Giá</th>
                <th className="text-center">Chất liệu</th>
                <th className="text-center">Loại</th>
                <th className="text-center">Số lượng</th>
                <th className="text-center">Khuyến mãi</th>
                <th className="text-center">Lượt xem</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                  />
                </th>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="helpId"
                    name="searchName"
                    onChange={this.onChange}
                  />
                </th>
                <th>
                  <select className="form-control">
                    <option>Tất cả</option>
                    <option>Tăng dần</option>
                    <option>Giảm dần</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>Tất cả</option>
                    <option>Gỗ ép</option>
                    <option>Gỗ thịt</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>Tất cả</option>
                    <option>Accoutic</option>
                    <option>Classic</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>Tất cả</option>
                    <option>Tăng dần</option>
                    <option>Giảm dần</option>
                  </select>
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
              </tr>
              {this.showProducts(products)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.productList,
    deleteProduct: state.product.deleteProduct,
    addProduct: state.product.addProduct,
    fixProduct: state.product.fixProduct,
  };
};
export default connect(mapStateToProps)(ProductManage);
