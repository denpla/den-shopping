import { REMOVE_PRODUCT } from "./types";

export const removeProduct = (name) => {
  return (dispatch) => {
    console.log("Inside remove product");
    console.log("The name is ", name);
    dispatch({
      type: REMOVE_PRODUCT,
      payload: name,
    });
  };
};
