import React from 'react'
import './banner.css'
export default function Banner() {
    return (
        <div className='banner-img'>
            <div className='banner-content'>
                <div>
                    <h2 className='banner-txt-l'>Latest Styles</h2>
                    <p className='banner-txt-s'>At Yesterday's Prices</p>
                </div>
                <button className='banner-btn'>BROWSE ALL STYLES</button>
            </div>

        </div>
    )
}
