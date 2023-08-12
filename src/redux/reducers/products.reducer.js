import { SET_CART, SET_PAGE_TYPE, SET_PRODUCTS } from "../actionTypes";

const initialState = {
    products: {},
    pageType: "allProducts",
    cartItems: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SET_PAGE_TYPE:
            return {
                ...state,
                pageType: action.payload
            }
        case SET_CART:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
};