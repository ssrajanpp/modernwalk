import { createStore } from "redux";

const initialState = {
    products: [],
    filteredProducts: [],
    error: null,
    isLoading: false,
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.products, filteredProducts: action.products, isLoading: false };
      case "FILTER_PRODUCTS":
        return { ...state, filteredProducts: action.filteredProducts };
      case "SET_ERROR":
        return { ...state, error: action.error, isLoading: false };
      case "SET_LOADING":
        return { ...state, isLoading: action.isLoading };
      default:
        return state;
    }
  }

const store = createStore(reducer);

export default store;
