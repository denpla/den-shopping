import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const productQuantity = (action, productName) => {
  return (dispatch) => {
    console.log("Inside product quantity");
    console.log("The action is", action);
    console.log("The name is is", productName);
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: productName,
    });
  };
};
