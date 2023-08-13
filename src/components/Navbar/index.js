import React, { useState } from 'react'
import './navbar.css'
import vector from '../../images/carts.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/products.action'
import { SET_PAGE_TYPE } from '../../redux/actionTypes'
export default function Navbar() {
    const pageType = useSelector((state) => state.pageType);
    const cart = useSelector((state) => state.cartItems)
    const dispatch = useDispatch()
    const handleAllProducts = async () =>{
        dispatch({
            type: SET_PAGE_TYPE,
            payload: "allProducts"
        })
    }
    const handleFeaturedProducts = async () =>{
        dispatch({
            type: SET_PAGE_TYPE,
            payload: "featuredProducts"
        })
    }
    return (
        <div className='navbar'>
            <div className='company-name'>
                <span>Right</span><span className='white'>FIT.COM</span>
            </div>
            <div>
                <ul className='menu-items'>
                    <li className={pageType=="allProducts"? "black":null} onClick={handleAllProducts}>All Products</li>
                    <li className={pageType=="featuredProducts"? "black":null} onClick={handleFeaturedProducts}>Featured Products</li>
                    <li className='about me'>About Us</li>
                    <li className='cart'><img src={vector} alt="cart" width="20px" height="20px" /><span className='count'>{cart.length}</span></li>
                </ul>
            </div>
        </div>
    )
}
