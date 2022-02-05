import React, { Component } from "react";
import "./allProduct.pages.scss";
import Collapsible from "react-collapsible";
// import { Card, CardMedia, Grid } from "@material-ui/core";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../../components/productCard/productCard.component";
// import { getProductListAction } from "../../store/actions/product.action";
// import { connect } from "react-redux";
// import ProductCard from "../../../components/productCard/productCard.component";

class AllProduct extends Component {
  state = {
    id: -1,
    id2: -1,
    id3: -1,
    id4: -1,
    product: "",
    trademark: "",
    type: "",
    priceUp: 0,
    priceDown: 0,
    listProduct: "",
  };

  // async componentDidMount() {
  //   await this.props.dispatch(getProductListAction());
  //   this.setState({ listProduct: this.props.listProduct });
  // }
  loadingPage = () => {
    return (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    );
  };
  getProduct = (product, id) => {
    if (product === this.state.product) {
      this.setState({ product: "", id: -1 });
    } else {
      this.setState({ product, id });
    }
  };
  getTrademark = (trademark, id2) => {
    if (trademark === this.state.trademark) {
      this.setState({ trademark: "", id2: -1 });
    } else {
      this.setState({ trademark, id2 });
    }
  };
  getTypeG = (type, id3) => {
    if (type === this.state.type) {
      this.setState({ type: "", id3: -1 });
    } else {
      this.setState({ type, id3 });
    }
  };
  getPrice = (priceDown, priceUp, id4) => {
    if (priceDown === this.state.priceDown && priceUp === this.state.priceUp) {
      this.setState({ priceUp: 0, priceDown: 0, id4: -1 });
    } else {
      this.setState({ priceDown, priceUp, id4 });
    }
  };
  renderProduct = () => {
    const { listProduct } = this.props;

    let listPro = listProduct
      .map((v) => v["typeNamePro"])
      .map((v, i, array) => array.indexOf(v) === i && i)
      .filter((v) => listProduct[v])
      .map((v) => listProduct[v]);
    return listPro.map((value, index) => {
      return (
        <p
          key={index}
          // className="maume"
          className={this.state.id === index ? "active" : "maume"}
          onClick={() => this.getProduct(value.typeNamePro, index)}
        >
          {value.typeNamePro}
        </p>
      );
    });
  };
  renderTrademark = () => {
    const { listProduct } = this.props;

    let listTrademark = listProduct
      .map((v) => v["thuongHieu"])
      .map((v, i, array) => array.indexOf(v) === i && i)
      .filter((v) => listProduct[v])
      .map((v) => listProduct[v]);
    return listTrademark.map((value, index) => {
      return (
        <p
          key={index}
          className={this.state.id2 === index ? "active" : "maume"}
          onClick={() => this.getTrademark(value.thuongHieu, index)}
        >
          {value.thuongHieu}
        </p>
      );
    });
  };
  renderTypeG = () => {
    const { listProduct } = this.props;
    let listTypeG = listProduct
      .map((v) => v["typesProduct"])
      .map((v, i, array) => array.indexOf(v) === i && i)
      .filter((v) => listProduct[v])
      .map((v) => listProduct[v]);
    return listTypeG.map((value, index) => {
      return (
        <p
          key={index}
          className={this.state.id3 === index ? "active" : "maume"}
          onClick={() => this.getTypeG(value.typesProduct, index)}
        >
          {value.typesProduct}
        </p>
      );
    });
  };
  renderPrice = () => {
    const priceUpDown = [
      {
        priceDown: 1000000,
        priceUp: 5000000,
      },
      {
        priceDown: 5000000,
        priceUp: 10000000,
      },
      {
        priceDown: 10000000,
        priceUp: 15000000,
      },
    ];
    return priceUpDown.map((value, index) => {
      return (
        <p
          key={index}
          className={this.state.id4 === index ? "active" : "maume"}
          onClick={() => this.getPrice(value.priceDown, value.priceUp, index)}
        >
          {value.priceDown / 1000000 + "tr"} - {value.priceUp / 1000000 + "tr"}
        </p>
      );
    });
  };
  renderListImage = () => {
    const { listProduct } = this.props;
    let listFind = [];
    if (
      this.state.product === "" &&
      this.state.trademark === "" &&
      this.state.priceUp === 0 &&
      this.state.priceDown === 0 &&
      this.state.type === ""
    ) {
      listFind = listProduct;
    } else {
      listFind = listProduct;
      if (this.state.product !== "") {
        listFind = listFind.filter(
          (pro) => pro.typeNamePro === this.state.product,
        );
      }
      if (this.state.trademark !== "") {
        listFind = listFind.filter(
          (pro) => pro.thuongHieu === this.state.trademark,
        );
      }

      if (this.state.type !== "") {
        listFind = listFind.filter(
          (pro) => pro.typesProduct === this.state.type,
        );
      }
      if (this.state.priceDown !== 0 && this.state.priceUp !== 0) {
        listFind = listFind.filter(
          (pro) =>
            pro.priceProduct < this.state.priceUp &&
            pro.priceProduct >= this.state.priceDown,
        );
      }
    }

    return listFind.map((value, index) => {
      return <ProductCard value={value} key={index} index={index} />;
    });
  };
  render() {
    const bakgr = {
      color: "red",
      cursor: "pointer",
      fontSize: "25px",
      backgroundImage: "url(./img/dropdown-icon.png)",
      backgroundPosition: "calc(100% - 8px)",
      backgroundRepeat: "no-repeat",
      width: "100%",
    };
    return this.props.loading ? (
      this.loadingPage()
    ) : (
      <div id="product">
        <div className="productDetail">
          <h1 className="text-center">
            <b>CÁC SẢN PHẨM</b>
          </h1>
          <div className="row">
            <div className="col-md-2 selectScroll">
              <h3>Sắp xếp theo:</h3>
              <div className="product">
                <Collapsible
                  trigger="Loại Sản Phẩm "
                  triggerTagName="div"
                  triggerStyle={bakgr}
                >
                  <div className="noiDung">{this.renderProduct()}</div>
                </Collapsible>
              </div>
              <div className="trademark">
                <Collapsible
                  trigger="Thương hiệu "
                  triggerTagName="div"
                  triggerStyle={bakgr}
                >
                  <div className="noiDung">{this.renderTrademark()}</div>
                </Collapsible>
              </div>
              <div className="typeG">
                <Collapsible
                  trigger="Loại đàn "
                  triggerTagName="div"
                  triggerStyle={bakgr}
                >
                  <div className="noiDung">{this.renderTypeG()}</div>
                </Collapsible>
              </div>
              <div className="price">
                <Collapsible
                  trigger="Giá "
                  triggerTagName="div"
                  triggerStyle={bakgr}
                >
                  <div className="noiDung">{this.renderPrice()}</div>
                </Collapsible>
              </div>
            </div>
            <div className="col-md-10">
              <div className="search">
                {/* <input type="text" name="" id="" /> */}
              </div>
              <div className="row selectScroll khung ">
                {this.renderListImage()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     listProduct: state.product.productList,
//     loading: state.loading.loading,
//   };
// };
export default AllProduct;
