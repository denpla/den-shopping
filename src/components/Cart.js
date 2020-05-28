import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Cart({ basketProps }) {
  console.log(basketProps);
  let productsInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  return (
    <div>
      <h1>This is a Cart</h1>
    </div>
  );
}

export default connect(mapStateToProps)(Cart);
