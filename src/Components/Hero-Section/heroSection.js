import './heroSection.css';
import React from 'react';
import Carousel from '../Carousel/carousel';

export default function HeroSection() {
    return (
        <div className="heroSection-body">

            <div className="heroSection-sections" id="heroSection">
              <Carousel />
              {/* <ImageSlider imageSlides={ImageSliderData}/> */}

            </div> 
        </div>
    )
}
