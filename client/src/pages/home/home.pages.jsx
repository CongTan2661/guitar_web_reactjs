import React, { Component } from "react";
import CarouselHome from "./carouselHome/carousel.home";
import { connect } from "react-redux";
import { getProductListAction } from "../../store/actions/product.action";
import AllProduct from "./allProduct/allProduct.pages";
import FeedBack from "./feedback/feedback.home";
class Home extends Component {
  loadingPage = () => {
    return (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    );
  };
  async componentDidMount() {
    await this.props.dispatch(getProductListAction());
    this.setState({ listProduct: this.props.listProduct });
  }
  render() {
    return this.props.loading ? (
      this.loadingPage()
    ) : (
      <>
        <div className="container">
          <div id="home">
            <CarouselHome />
          </div>
          <div>
            <AllProduct listProduct={this.props.productList} />
          </div>
          <div className="feedback">
            <FeedBack/>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps)(Home);
