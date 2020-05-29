import React, { Fragment } from "react";
import { connect } from "react-redux";
import ArcboundRavager from "../assets/ppro-2019-arcbound-ravager.jpg";
import HuatliWP from "../assets/xln-224-huatli-warrior-poet.jpg";
import NimbleOb from "../assets/hou-40-nimble-obstructionist.jpg";
import JadelightRanger from "../assets/rix-136-jadelight-ranger.jpg";
import ExperimentalFrenzy from "../assets/grn-99-experimental-frenzy.jpg";
import { Button, Image } from "semantic-ui-react";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

const productImages = (product) => {
  if (product.tagName === "Arcbound") {
    return ArcboundRavager;
  } else if (product.tagName === "Huatli") {
    return HuatliWP;
  } else if (product.tagName === "Nimble") {
    return NimbleOb;
  } else if (product.tagName === "Ranger") {
    return JadelightRanger;
  } else if (product.tagName === "Frenzy") {
    return ExperimentalFrenzy;
  }
};

function Cart({ basketProps }) {
  console.log(basketProps);
  let productsInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment>
        <div className="product">
          <span>
            <Button
              color="red"
              size="big"
              circular
              icon="times circle outline"
            ></Button>
          </span>
          <Image className="imageCart" src={productImages(product)}></Image>
          <span className="sm-hide">{product.name}</span>
          <div className="price sm-hide">{product.price} EUR</div>
          <div className="quantity">
            <Button
              className="decrease"
              circular
              color="red"
              icon="arrow alternate circle left outline"
            ></Button>
            <span>{product.numbers}</span>
            <Button
              className="increase"
              circular
              color="red"
              icon="arrow alternate circle right outline"
            ></Button>
          </div>
          <div className="total">{product.numbers * product.price} EUR</div>
        </div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">BASKET TOTAL</h4>
        <h4 className="basketTotal">{basketProps.cartCost} EUR</h4>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Cart);
