import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./product.component.scss";

class ProductCard extends Component {
  renderListImage = () => {
    const { value } = this.props;
    let listImage = JSON.parse(value.listImg);
    listImage.splice(0, 0, JSON.parse(value.imgProductMain));
    return listImage.map((value, index) => {
      return (
        <img
          key={index}
          onClick={() => {
            this.getImage(value);
          }}
          className="itemImage"
          src={value}
          alt=""
        />
      );
    });
  };
  state = {
    id: -1,
    hinh: "",
  };
  getImage = (hinhMoi) => {
    this.setState({ hinh: hinhMoi });
  };
  getProduct = (id, hinhAnh) => {
    this.setState({ id: id, hinh: hinhAnh });
  };
  render() {
    const { value, index } = this.props;
    return (
      <div className=" col-md-3">
        <div className="hinhAnh " key={index}>
          <div
            className="hinhHome"
            style={{ backgroundImage: `url(${value.imgProductMain})` }}
          >
            <Link className="under" to={`/detail-product/${value.id}`}></Link>
          </div>

          <div>
            <button
              onClick={() => {
                this.getProduct(value.id, JSON.parse(value.imgProductMain));
              }}
              type="button"
              className="btn btn-primary xemNhanh"
              data-toggle="modal"
              data-target={`#modelId${value.id}`}
              style={{ whiteSpace: "nowrap" }}
            >
              Xem Nhanh
            </button>

            <div
              className="modal fade"
              id={`modelId${value.id}`}
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div className="modal-dialog khungDetail" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      <b>Mô Tả</b>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-2">{this.renderListImage()}</div>
                      <div className="col-md-6">
                        <img
                          className="hinhDetail"
                          src={this.state.hinh}
                          alt=""
                        />
                      </div>
                      <div className="col-md-4">
                        <div className="tenSP">{value.nameProduct}</div>
                        <div className="giaSP">{value.priceProduct.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}</div>

                        <a href={`/detail-product/${value.id}`}>Xem Chi Tiet</a>
                        {/* <Link data-dismiss="modal" aria-label="Close" to={'/detail-product/'+ value.id}>Xem chi tiết</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trailer ">
          <div className="tenSp text-center">
            <b>{value.nameProduct}</b>
          </div>
          <div className="giaSp text-center">
            <b>{value.priceProduct.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
