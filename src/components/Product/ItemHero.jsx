import React from 'react'
import './product.css'
import Carousal from '../Carousal/Carousal'

function ItemHero(props) {
    return (
        <div>
            <div className="heroContainer">
                <div className="heroCrousal">
                    <div id="carouselExampleSlidesOnly" data-interval="2000" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={props.photo1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={props.photo2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={props.photo3} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={props.photo4} alt="Fourth slide" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroText">
                    <h1><span className='heading-initial'>{props.title[0]}</span>{props.title.slice(1)}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemHero