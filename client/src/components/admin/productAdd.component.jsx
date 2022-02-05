import React, { Component } from "react";
import { postProductListAction } from "../../store/actions/product.action";
import { connect } from "react-redux";
class ProductAdd extends Component {
  state = {
    typeNamePro: "",
    nameProduct: "",
    typesProduct: "",
    materialProduct: "",
    priceProduct: 0,
    quantityProduct: 0,
    discountProduct: 0,
    selectFile: null,
    selectMutilFile: null,
  };
  upload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productMain", this.state.selectFile);
    if (this.state.selectMutilFile) {
      for (let i = 0; i < this.state.selectMutilFile.length; i++) {
        data.append("productList", this.state.selectMutilFile[i]);
      }
    }
    data.append("nameProduct", this.state.nameProduct);
    data.append("typesProduct", this.state.typesProduct);
    data.append("typeNamePro", this.state.typeNamePro);
    data.append("materialProduct", this.state.materialProduct);
    data.append("priceProduct", this.state.priceProduct);
    data.append("quantityProduct", this.state.quantityProduct);
    data.append("discountProduct", this.state.discountProduct);
    this.props.dispatch(postProductListAction(data));
    // console.log(this.props);
  };
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form
        // action="http://localhost:8082/api/v2/product/"
        // method="POST"
        encType="multipart/form-data"
      >
        <div className="form-row">
          <div className="form-group col-md-8">
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              className="form-control"
              name="nameProduct"
              onChange={(e) => {
                this.setState({
                  typeNamePro: e.target.value.split(" ", 1),
                  nameProduct: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Giá : (VND)</label>
            <input
              type="text"
              className="form-control"
              name="priceProduct"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Chất liệu: </label>
            <input
              type="text"
              className="form-control"
              name="materialProduct"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label>Loại: </label>
            <input
              type="text"
              className="form-control"
              name="typesProduct"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label>Loại đàn: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.typeNamePro}
              name="typeNamePro"
              onChange={this.onChange}
              // disabled
            />
          </div>
          <div className="form-group col-md-2">
            <label>Số lượng: </label>
            <input
              type="text"
              className="form-control"
              name="quantityProduct"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label>Khuyến mãi: (%)</label>
            <input
              type="text"
              className="form-control"
              name="discountProduct"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Hình ảnh: </label>
            <input
              type="file"
              className="form-control"
              name="productMain"
              onChange={(e) => {
                this.setState({ selectFile: e.target.files[0] });
              }}
            />
          </div>
          <div className="form-group col-md-8">
            <label>Danh sách hình ảnh: </label>
            <input
              type="file"
              className="form-control"
              name="productList"
              multiple
              onChange={(e) => {
                this.setState({ selectMutilFile: e.target.files });
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.upload}>
          Lưu lại
        </button>
      </form>
    );
  }
}
const mapStateToProps = () => {};
export default connect()(ProductAdd);
