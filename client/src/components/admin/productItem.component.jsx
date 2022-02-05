import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProductItemAction,
  fixProduct,
} from "../../store/actions/product.action";

class ProductItem extends Component {
  state = {
    nameProduct: this.props.product.nameProduct,
    priceProduct: this.props.product.priceProduct,
    materialProduct: this.props.product.materialProduct,
    typesProduct: this.props.product.typesProduct,
    typeNamePro: this.props.product.typeNamePro,
    quantityProduct: this.props.product.quantityProduct,
    discountProduct: this.props.product.discountProduct,
    imgProductMain: this.props.product.imgProductMain,
    listImg: this.props.product.listImg,
    selectFile: null,
    selectMutilFie: null,
  };
  onDelete = (id) => {
    this.props.onDelete(id);
  };
  getId = async (id) => {
    await this.props.dispatch(getProductItemAction(id));
    const { productItem } = this.props;
    this.setState({
      nameProduct: productItem.nameProduct,
      priceProduct: productItem.priceProduct,
      materialProduct: productItem.materialProduct,
      typesProduct: productItem.typesProduct,
      typeNamePro: productItem.typeNamePro,
      quantityProduct: productItem.quantityProduct,
      discountProduct: productItem.discountProduct,
      imgProductMain: productItem.imgProductMain,
      listImg: productItem.listImg,
    });
  };
  quantity = async (e) => {
    const { product } = this.props;
    const quantity = parseInt(this.state.quantityProduct) + parseInt(e);
    console.log(quantity);
    if (quantity >= 0) {
      await this.setState({
        quantityProduct: quantity,
      });
      this.props.dispatch(fixProduct(product.idProduct, this.state));
    }
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { product } = this.props;
    let data = new FormData();

    data.append("productMain", this.state.selectFile);
    if (this.state.selectMutilFie) {
      for (let i = 0; i < this.state.selectMutilFie.length; i++) {
        data.append("productList", this.state.selectMutilFie[i]);
      }
    }
    data.append("nameProduct", this.state.nameProduct);
    data.append("typesProduct", this.state.typesProduct);
    data.append("typeNamePro", this.state.typeNamePro);
    data.append("materialProduct", this.state.materialProduct);
    data.append("priceProduct", this.state.priceProduct);
    data.append("quantityProduct", this.state.quantityProduct);
    data.append("discountProduct", this.state.discountProduct);
    data.append("imgProductMain", JSON.parse(this.state.imgProductMain));
    data.append("listImg", JSON.parse(this.state.listImg));
    console.log(JSON.parse(this.state.listImg));
    this.props.dispatch(fixProduct(product.id, data));
  };
  getIdImg = (id) => {
    console.log(id);
    const newListImg = JSON.parse(this.state.listImg);
    newListImg.splice(id, 1);

    this.setState({ listImg: JSON.stringify(newListImg) });
    // this.getImgList();
  };
  getImgList = () => {
    const { listImg } = this.state;
    console.log(JSON.parse(listImg));
    return JSON.parse(listImg).map((value, index) => {
      return (
        <div key={index} className="col-md-6">
          <img
            src={value}
            alt=""
            style={{
              width: "60px",
              height: "80px",
              objectFit: "cover",
            }}
          />
          <span> {value.slice(value.lastIndexOf("\\") + 1)}</span>
          <button
            type="button"
            className="btn "
            onClick={() => {
              this.getIdImg(index);
            }}
          >
            x
          </button>
        </div>
      );
    });
  };
  render() {
    const { product, index } = this.props;
    const {
      nameProduct,
      priceProduct,
      materialProduct,
      typesProduct,
      typeNamePro,
      quantityProduct,
      discountProduct,
      imgProductMain,
    } = this.state;
    let imgMain = JSON.parse(imgProductMain);
    return (
      <tr>
        <th className="text-center">{index + 1}</th>
        <th className="text-center">{product.id}</th>
        <th>
          <span>{product.nameProduct}</span>
        </th>
        <th className="text-center">
          <span>{product.priceProduct}</span>
        </th>
        <th className="text-center">
          <span>{product.materialProduct}</span>
        </th>
        <th className="text-center">
          <span>{product.typesProduct}</span>
        </th>
        <td className="text-center">
          <span className="qty">{product.quantityProduct} </span>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              className="btn btn-secondary active"
              onClick={() => this.quantity(-1)}
            >
              <input type="radio" />-
            </label>
            <label
              className="btn btn-secondary"
              onClick={() => this.quantity(1)}
            >
              <input type="radio" />+
            </label>
          </div>
        </td>
        <th className="text-center">
          <span>{product.discountProduct}</span>
        </th>
        <th className="text-center">
          <span>{product.discountProduct}</span>
        </th>
        <th className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target={"#modelId" + index}
            onClick={() => this.getId(product.id)}
          >
            Sửa
          </button>
          &nbsp;
          <div
            className="modal fade"
            id={"modelId" + index}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: "1000px" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sửa sản phẩm</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form encType="multipart/form-data">
                    <div className="form-row">
                      <div className="form-group col-md-8">
                        <label>Tên sản phẩm: </label>
                        <input
                          type="text"
                          className="form-control"
                          name="nameProduct"
                          value={nameProduct}
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
                          value={priceProduct}
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
                          value={materialProduct}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label>Loại: </label>
                        <input
                          type="text"
                          className="form-control"
                          name="typesProduct"
                          value={typesProduct}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group col-md-2">
                        <label>Loại đàn: </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={typeNamePro}
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
                          value={quantityProduct}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group col-md-2">
                        <label>Khuyến mãi: (%)</label>
                        <input
                          type="text"
                          className="form-control"
                          name="discountProduct"
                          value={discountProduct}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label>Hình ảnh: </label>
                        <br />
                        {/* <img src={JSON.parse(imgProductMain)} alt="" />
                        <input
                          type="file"
                          className="form-control"
                          name="imgProductMain"
                          // value={imgProductMain}
                        /> */}
                        <a href={imgMain}>
                          <img
                            src={imgMain}
                            alt=""
                            style={{
                              width: "60px",
                              height: "80px",
                              objectFit: "cover",
                            }}
                          />
                          <span>
                            {" "}
                            {imgMain.slice(imgMain.lastIndexOf("\\") + 1)}
                          </span>
                        </a>
                        <input
                          type="file"
                          onChange={(e) => {
                            this.setState({ selectFile: e.target.files[0] });
                          }}
                        />
                      </div>
                      <div className="form-group col-md-8">
                        <label>Danh sách hình ảnh: </label>
                        {/* <input
                          type="file"
                          className="form-control"
                          id="listImg"
                          multiple
                        /> */}
                        <div className="row"> {this.getImgList()}</div>
                        <input
                          type="file"
                          onChange={(e) => {
                            this.setState({
                              selectMutilFie: e.target.files,
                            });
                          }}
                          multiple
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-success"
                        onClick={this.onSubmit}
                      >
                        Lưu lại
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </th>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productItem: state.product.productItem,
  };
};
export default connect(mapStateToProps)(ProductItem);
