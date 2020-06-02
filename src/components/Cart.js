import React, { Fragment } from "react";
import { connect } from "react-redux";
import ArcboundRavager from "../assets/ppro-2019-arcbound-ravager.jpg";
import HuatliWP from "../assets/xln-224-huatli-warrior-poet.jpg";
import NimbleOb from "../assets/hou-40-nimble-obstructionist.jpg";
import JadelightRanger from "../assets/rix-136-jadelight-ranger.jpg";
import ExperimentalFrenzy from "../assets/grn-99-experimental-frenzy.jpg";
import { Button, Image } from "semantic-ui-react";
import { productQuantity } from "../actions/productQuantity";

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

function Cart({ basketProps, productQuantity }) {
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
      <Fragment key={index}>
        <div className="product">
          <Button
            color="red"
            size="big"
            circular
            icon="times circle outline"
          ></Button>
          <Image className="imageCart" src={productImages(product)}></Image>
          <span className="sm-hide">{product.name}</span>
          <span className="pricesm-hide">{product.price} EUR</span>
          <span className="sm-quantity">
            <Button
              onClick={() => productQuantity("decrease", product.tagName)}
              className="button-decrease"
              circular
              color="red"
              size="small"
              icon="arrow alternate circle left outline"
            ></Button>
            <span className="sm-numbers">{product.numbers} </span>
            <Button
              onClick={() => productQuantity("increase", product.tagName)}
              className="button-increase"
              circular
              size="small"
              color="red"
              icon="arrow alternate circle right outline"
            ></Button>
          </span>
          <div className="sm-total">{product.numbers * product.price} EUR</div>
        </div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <span className="product-title">
          <h5>PROODUCT</h5>
        </span>
        <span className="price">
          {" "}
          <h5>PRICE</h5>
        </span>
        <span className="quantity">
          {" "}
          <h5>QUANTITY</h5>
        </span>
        <span className="total">
          {" "}
          <h5>TOTAL</h5>
        </span>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basket-total">
        <span>
          <h4 className="basket-title">
            BASKET TOTAL:
            <span className="basket-titlePrice">
              {Math.round(basketProps.cartCost)},00 EUR
            </span>
          </h4>
        </span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { productQuantity })(Cart);
