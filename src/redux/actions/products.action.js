import { SET_PRODUCTS } from "../actionTypes";

const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo"
export const getAllProducts = (values) => async (dispatch) => {
    const res = await fetch(
        "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "GET",
            body: JSON.stringify(values),
        }
    );
    const products = await res.json();
    dispatch({
        type: SET_PRODUCTS,
        payload: products
    })
}
