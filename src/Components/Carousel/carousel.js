import "./carousel.css";
import React from 'react'
import Image1 from "../../Images/Image 1.png";
import Image2 from "../../Images/Image 2.png";
import Image3 from "../../Images/Image 3.png";
import Image4 from "../../Images/Image 4.png";


export default function Carousel() {
    return (
        <div className="carousel-body">
            <div className="carousel-sliderFrames">
                <div className="slide-images"> 

                    <div className="img-container">
                        <img src={Image1} alt="/"/>
                    </div>

                    <div className="img-container">
                        <img src={Image2}alt="/"/> 
                    </div>

                    <div className="img-container">
                        <img src={Image3} alt="/"/>
                    </div>

                    <div className="img-container">
                        <img src={Image4} alt="/"/>
                    </div>

                </div>
            </div>  
        </div>
    )
}
