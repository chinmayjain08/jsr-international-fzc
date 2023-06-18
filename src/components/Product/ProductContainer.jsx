import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import './product.css'



function ProductContainer() {
    return (
        <div className='productContainer'>
        <Link to={"/plastic"}>
            <div className="productCard">
                <img src="/images/JSR_Inter_project_pics/plastic/PP/PP-CAPS-REGRIND-3-2.jpg" alt="" />
                <div className="cardText">
                    <h4>PLASTIC</h4>
                </div>
            </div>
            </Link>
            <Link to={"/rubber"}>
                
            <div className="productCard">
                <img src="/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-1.png" alt="" />
                <div className="cardText">
                    <h4>RUBBER</h4>

                </div>
            </div>
            </Link>
            <Link to={"/metal"}>

            <div className="productCard">
                <img src="/images/JSR_Inter_project_pics/Metal/Stainless_Steel/SS400-1.jpeg" alt="" />
                <div className="cardText">
                   <h4>METAL</h4>
                </div>
            </div>
            </Link>
            <Link to={"/paper"}>  <div className="productCard">
                <img src="/images/JSR_Inter_project_pics/Paper/VIRGIN_KRAFT_LINER_BOARD/Virgin-Kraft-liner-board-2.jpg" alt="" />
                <div className="cardText">
                  <h4>PAPER</h4>
                </div>
            </div>
            </Link>
            <Outlet/>
        </div>
    )
}

export default ProductContainer