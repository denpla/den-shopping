import React, { Fragment } from "react";
import { connect } from "react-redux";
import ArcboundRavager from "../assets/ppro-2019-arcbound-ravager.jpg";
import HuatliWP from "../assets/xln-224-huatli-warrior-poet.jpg";
import NimbleOb from "../assets/hou-40-nimble-obstructionist.jpg";
import JadelightRanger from "../assets/rix-136-jadelight-ranger.jpg";
import ExperimentalFrenzy from "../assets/grn-99-experimental-frenzy.jpg";
import { Image } from "semantic-ui-react";
import { productQuantity } from "../actions/productQuantity";
import { removeProduct } from "../actions/removeProduct";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

const productImages = (product) => {
  if (product.tagName === "ArcboundRavager") {
    return ArcboundRavager;
  } else if (product.tagName === "HuatliWP") {
    return HuatliWP;
  } else if (product.tagName === "NimbleOb") {
    return NimbleOb;
  } else if (product.tagName === "JadelightRanger") {
    return JadelightRanger;
  } else if (product.tagName === "ExperimentalFrenzy") {
    return ExperimentalFrenzy;
  }
};

function Cart({ basketProps, productQuantity, removeProduct }) {
  console.log("BasketProps:" + basketProps);
  console.log("PROPS" + productQuantity);
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
        <span className="product">
          <span className="productElement">
            <button
              onClick={() => removeProduct(product.tagName)}
              className="small ui icon button blue circular"
            >
              <i className="close icon large"></i>
            </button>
          </span>
          <span className="productElement">
            <Image className="imageCart" src={productImages(product)}></Image>
          </span>
          <span className="sm-hide">{product.name}</span>
          <span className="pricesm-hide">{product.price} EUR</span>
          <span className="sm-quantity">
            <button
              onClick={() => productQuantity("decrease", product.tagName)}
              className="decrease small ui icon button blue circular"
            >
              <i className="angle left icon large"></i>
            </button>
            <span className="sm-numbers">{product.numbers} </span>
            <button
              onClick={() => productQuantity("increase", product.tagName)}
              className="increase small ui icon button blue circular"
            >
              <i className="angle right icon large"></i>
            </button>
          </span>
          <span className="sm-total">
            {(product.numbers * product.price).toFixed(2)} EUR
          </span>
        </span>
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
              {Math.abs(basketProps.cartCost.toFixed(2))},00 EUR
            </span>
          </h4>
        </span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { productQuantity, removeProduct })(
  Cart
);
