import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { getMaterials } from '../../services/getMaterials'
import { getColors } from '../../services/getColors'
export default function Sidebar() {
    const [material, SetMaterial] = useState([])
    const [colors, SetColors] = useState([])
    useEffect(() => {
        const productInfo = async () => {
            SetMaterial(await getMaterials())
            SetColors(await getColors())
        }
        productInfo()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar-heading">Filter</div>
            <div className="sidebar-section">
                <div className="sidebar-subheading">Materials</div>
                <div className="sidebar-options">
                    <div className="sidebar-option">All</div>
                    {material?.material?.map((item) => {
                        return <div className="sidebar-option">{item.name}</div>
                    })}
                </div>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-subheading">Colors</div>
                <div className="sidebar-options">
                    {colors?.colors?.map((item) => {
                        return <div className="sidebar-option">{item.name}</div>
                    })}

                </div>
            </div>
        </div>

    )
}
