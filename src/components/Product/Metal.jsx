import React from 'react'
import './product.css'
import ItemHero from './ItemHero'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Carousal from '../Carousal/Carousal'



function Metal() {

    const data={
        photo1:"/images/JSR_Inter_project_pics/Metal/Stainless_Steel/SS304-5.jpg",
        photo2:"/images/JSR_Inter_project_pics/Metal/Cast_Iron/Cast-Iron-2.jpg",
        photo3:"/images/JSR_Inter_project_pics/Metal/Compressor_Scrap/Compressor-Scrap-6.jpeg",
        photo4:"/images/JSR_Inter_project_pics/Metal/Electric_Motor/Electric-Motor-4.jpeg"
    }
    return (
        <div className='container'>
        <Navbar></Navbar>
            <ItemHero photo1={data.photo1} photo2={data.photo2} photo3={data.photo3} photo4={data.photo4} title="Metal" description="The postconsumer plastics recycling process consists of several steps. The first step is the collection of waste plastics (Bataineh, 2020; Franklin Associates, 2018; Santos et al., 2021). In terms of collection, MSW and industrial waste can be differentiated (Willis et al., 2020). The former process includes the collection of postconsumer plastic waste, which is typically mixed and contains contaminants." />
            <div className="itemProductContainer">
                <Link className="items" to={"/aluminium"}>Aluminum Scrap</Link>
                <Link className="items" to={"/cast_iron"}>Cast Iron</Link>
                <Link className="items" to={"/compressor_scrap"}>Compressor Scrap</Link>
                <Link className="items" to={"/electric_motor"}>Electric Motor</Link>
                <Link className="items" to={"/stainless_still"}>Stainless Steel</Link>
            </div>
            <Carousal/>
        </div>
    )
}

export default Metal