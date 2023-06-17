import React from 'react'
import './product.css'
import ProductContainer from './ProductContainer'

import ItemHero from './ItemHero'
import Navbar from '../Navbar/Navbar';




function Product() {
    const data={
        photo1:"/images/JSR_Inter_project_pics/plastic/PET/PET-BOTTLES-2-2.jpg",
        photo2:"/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-3.png",
        photo3:"/images/JSR_Inter_project_pics/Metal/Compressor_Scrap/Compressor-Scrap-10.jpeg",
        photo4:"/images/JSR_Inter_project_pics/Paper/KRAFT_CARRIER_BOARD/KRAFT-CARRIER-BOARD-1.jpg"
    }
    return (
        <div className='container'>
        <Navbar></Navbar>
            <ItemHero photo1={data.photo1} photo2={data.photo2} photo3={data.photo3} photo4={data.photo4} title="JSR International" description="We JSR international FZC, JSR introduce ourselves as one of the foremost trading companies in UAE with operations in Middle East, Europe, USA, Africa, Far East and South East Asia. JSR strategy is to create added value to the string between producers and end- users." />
            <ProductContainer />
            
        </div>
    )
}

export default Product


