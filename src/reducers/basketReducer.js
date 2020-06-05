import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_PRODUCT,
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    ArcboundRavager: {
      name: "Arcbound Ravager foil",
      tagName: "ArcboundRavager",
      price: 5.62,
      numbers: 0,
      inCart: false,
    },
    HuatliWP: {
      name: "Huatli, Warrior Poet foil",
      tagName: "HuatliWP",
      price: 3.95,
      numbers: 0,
      inCart: false,
    },
    NimbleOb: {
      name: "Nimble Obstructionist foil",
      tagName: "NimbleOb",
      price: 4.07,
      numbers: 0,
      inCart: false,
    },
    JadelightRanger: {
      name: "Jadelight Ranger foil",
      tagName: "JadelightRanger",
      price: 3.61,
      numbers: 0,
      inCart: false,
    },
    ExperimentalFrenzy: {
      name: "Experimental Frenzy foil",
      tagName: "ExperimentalFrenzy",
      price: 3.01,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = {};
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log("productSelected.numbers" + productSelected.numbers);
      console.log("productSelected" + productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let decreasecartCost = 0;
      let pureBasketNumber = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        decreasecartCost = state.cartCost;
        pureBasketNumber = state.basketNumbers;
      } else {
        productSelected.numbers -= 1;
        decreasecartCost =
          state.cartCost - state.products[action.payload].price;
        pureBasketNumber = state.basketNumbers - 1;
      }
      return {
        ...state,
        basketNumbers: pureBasketNumber,
        cartCost: decreasecartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case REMOVE_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersKnown = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersKnown,
        cartCost: state.cartCost - numbersKnown * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
