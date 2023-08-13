import React, { useEffect, useState } from 'react'
import './productList.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/products.action'
import Product from '../Product'
import { getMaterials } from '../../services/getMaterials.js'
import { getColors } from '../../services/getColors'
import { getFeaturedProducts } from '../../services/getFeaturedProducts'
export default function ProductList() {
    const { products } = useSelector((state) => state.products);
    const [featured, SetFeatured] = useState([]);
    const pageType = useSelector((state) => state.pageType);
    const [material, SetMaterial] = useState([])
    const [colors, SetColors] = useState([])
    const [featuredData, SetFeaturedData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllProducts())

        const productInfo = async () => {
            SetMaterial(await getMaterials())
            SetColors(await getColors())
            SetFeaturedData(await getFeaturedProducts())
        }
        productInfo()

        if (pageType == "featuredProducts") {
            const featuredProductIds = featuredData?.featured?.map(f => f.productId);
            SetFeatured(products?.filter(product => featuredProductIds?.includes(product.id)));
        }
    }, [pageType])

    return (
        <>
            {pageType == "allProducts" ?
                <div className='product-list'>
                    {products?.map((item) => {
                        return <div className='product' key={item.id}><Product item={item} material={material} colors={colors} /></div>
                    })}
                </div>
                : null}
            {pageType == "featuredProducts" ?
                <div className='product-list'>
                    {featured?.map((item) => {
                        return <div className='product' key={item.id}><Product item={item} material={material} colors={colors} /></div>
                    })}
                </div>
                : null}
        </>
    )
}
