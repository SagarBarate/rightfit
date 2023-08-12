import React from 'react'
import './footer.css'
import visa from "../../images/visa.png"
import logo from "../../images/logo.png"
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <div className='company-name'>
                    <span>RIGHT</span><span className='white'>FIT.COM</span>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>All Products</li>
                        <li>Featured Products</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            <div className='footer-mid'>
                <div>
                    <p>
                        We are a registered E-Commerce seller and we support a variety of Local and International payment modes
                    </p>
                </div>
                <img src={visa} alt="visa" width="329px" height="55px" />
            </div>
            <div className='footer-right'>
                <div>
                    <p>Website protected by</p>    
                </div>
                <img src={logo} alt="logo" width="220px" height="53px"/>
            </div>
        </div>
    )
}
