// import { Home } from "@material-ui/icons";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home.pages";
import Admin from "./pages/admin/admin.pages";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import DetailProduct from "./pages/detailProduct/detailProduct.pages";
import SignIn from "./pages/signin/signin.pages";
import SignUp from "./pages/signUp/signup.pages";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { verifyAdmin } from "./store/actions/user.action";
import Cookies from "./../node_modules/js-cookie/dist/js.cookie";
import User from "./pages/user/user.pages";


function App(props) {
  const [isVerify, setVerify] = useState({ status: "" });
  useEffect(() => {
    if (isVerify.status !== props.verify.status && Cookies.get("token")) {
      props.dispatch(verifyAdmin(Cookies.get("token")));
      setVerify({ status: props.verify.status });
    }
  }, [isVerify.status, props]);
  const verifyRole = () => {
    if (props.verify.status) {
      return (
        <Route path="/admin" exact={false}>
          {props.verify.status ? <Admin /> : <Redirect to="/" />}
        </Route>
      );
    }
  };
  const blockRouteSignin = () => {
    console.log(!Cookies.get("token"));
    return (
      <Route path="/signin" exact={false}>
        {!Cookies.get("token") ? <SignIn /> : <Redirect to="/" />}
      </Route>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Header />
          <Home />
          <Footer />
        </Route>

        {verifyRole()}

        {/* <Route path="/signin" exact={false}>
          <SignIn />
        </Route> */}
        <Route path="/signup" exact={false}>
          <SignUp />
        </Route>
        {blockRouteSignin()}
        {/* <Route path="/all-product" exact>
          <Header />
          <AllProduct />
          <Footer />
        </Route> */}
        <Route path="/detail-product/:maSp" exact={true}>
          <Header />
          <DetailProduct />
          <Footer />
        </Route>
        <Route path="/information" exact>
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    verify: state.user.verify,
  };
};
export default connect(mapStateToProps)(App);
