import React from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../../redux/actionTypes";
export default function Product({ item, material, colors }) {
    const cart = useSelector((state) => state.cartItems)
    const dispatch = useDispatch()
    const name_material = material.material?.find(
        (material) => material.id == item.materialId
    );
    const name_color = colors.colors?.find((color) => color.id == item.colorId);
    const addToCart = () => {
        dispatch({
            type: SET_CART,
            payload: [...cart,item]
        })
    }
    return (
        <div className="product-container" onClick={addToCart}>
            <div className="product-box">
                <img src={item.image} width="332px" height="442px" />
                <div class="overlay">
                    <p>Add to Cart</p>
                </div>
            </div>

            <h3 className="product-name">{item.name}</h3>
            <span className="color-name">{name_color?.name}</span>
            <span className="material-name">{name_material?.name}</span>
            <p className="product-price">INR {item.price}</p>
        </div>
    );
}
