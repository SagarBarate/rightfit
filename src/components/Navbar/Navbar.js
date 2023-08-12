import React from 'react'
import cart from '../../images/cart.png';
import './navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='company-name'>
            <span>Right</span><span className='white'>FIT.COM</span>
        </div>
        <div>
            <ul className='menu-items'>
                <li>ALL Products</li>
                <li>Featured Products</li>
                <li><img src={cart} alt='cart' width="20px" height="20px"/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
