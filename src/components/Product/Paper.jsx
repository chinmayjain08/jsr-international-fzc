import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import ItemHero from './ItemHero'
import Navbar from '../Navbar/Navbar'
import Carousal from '../Carousal/Carousal'


function Paper() {
    const data={
        photo1:"/images/JSR_Inter_project_pics/Paper/KRAFT_CARRIER_BOARD/KRAFT-CARRIER-BOARD-1.jpg",
        photo2:"/images/JSR_Inter_project_pics/Paper/KRAFT_UNSHREDDED/KRAFT-UNSHREDDED-2.jpg",
        photo3:"/images/JSR_Inter_project_pics/Paper/VIRGIN_KRAFT_LINER_BOARD/Virgin-Kraft-Liner-board-4.jpg",
        photo4:"/images/JSR_Inter_project_pics/Paper/KRAFT_CARRIER_BOARD/KRAFT-CARRIER-BOARD-3.jpg"
    }
    return (
        <div className='container'>
        <Navbar></Navbar>
            <ItemHero photo1={data.photo1} photo2={data.photo2} photo3={data.photo3} photo4={data.photo4} title="PAPER" description="The postconsumer plastics recycling process consists of several steps. The first step is the collection of waste plastics (Bataineh, 2020; Franklin Associates, 2018; Santos et al., 2021). In terms of collection, MSW and industrial waste can be differentiated (Willis et al., 2020). The former process includes the collection of postconsumer plastic waste, which is typically mixed and contains contaminants." />
            <div className="itemProductContainer">
                <Link className="items" to={"/virgin_kraft"}>VIRGIN KRAFT LINER BOARD</Link>
                <Link className="items" to={"/kraft_unshredded"}>KRAFT UNSHREDDED</Link>
                <Link className="items" to={"/kraft_carrier_board"}>KRAFT CARRIER BOARD</Link>
            </div>
            <Carousal/>
        </div>
    )
}

export default Paper