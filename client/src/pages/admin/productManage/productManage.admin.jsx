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
          <h2>Th??m s???n ph???m</h2>
        </div>
        <div className="row d-flex justify-content-center">
          {" "}
          {/*Qu???n l?? s???n ph???m*/}
          <ProductAdd />
        </div>
        <div className="row d-flex justify-content-center">
          {" "}
          {/*Qu???n l?? s???n ph???m*/}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">M?? sp</th>
                <th className="text-center">T??n s???n ph???m</th>
                <th className="text-center">Gi??</th>
                <th className="text-center">Ch???t li???u</th>
                <th className="text-center">Lo???i</th>
                <th className="text-center">S??? l?????ng</th>
                <th className="text-center">Khuy???n m??i</th>
                <th className="text-center">L?????t xem</th>
                <th className="text-center">H??nh ?????ng</th>
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
                    <option>T???t c???</option>
                    <option>T??ng d???n</option>
                    <option>Gi???m d???n</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>T???t c???</option>
                    <option>G??? ??p</option>
                    <option>G??? th???t</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>T???t c???</option>
                    <option>Accoutic</option>
                    <option>Classic</option>
                  </select>
                </th>
                <th>
                  <select className="form-control">
                    <option>T???t c???</option>
                    <option>T??ng d???n</option>
                    <option>Gi???m d???n</option>
                  </select>
                </th>
                <th></th>
                <th>
                  <select className="form-control">
                    <option>T???t c???</option>
                    <option>T??ng d???n</option>
                    <option>Gi???m d???n</option>
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
