import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    ArcboundRavager: {
      name: "Arcbound Ravager foil",
      price: 5.6,
      numbers: 0,
      inCart: false,
    },
    HuatliWP: {
      name: "Huatli, Warrior Poet foil",
      price: 3.95,
      numbers: 0,
      inCart: false,
    },
    NimbleOb: {
      name: "Nimble Obstructionist foil",
      price: 4.07,
      numbers: 0,
      inCart: false,
    },
    JadelightRanger: {
      name: "Jadelight Ranger foil",
      price: 3.6,
      numbers: 0,
      inCart: false,
    },
    ExperimentalFrenzy: {
      name: "Experimental Frenzy foil",
      price: 3.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      const addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
