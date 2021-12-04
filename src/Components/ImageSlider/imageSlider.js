import "./imageSlider.css";
import React, {useEffect, useState} from "react";
import { ImageSliderData } from "./imageSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";

const ImageSlider = ({imageSlides}) => {
    const [ current, setCurrent ] = useState(0);
    const length = imageSlides.length;

    useEffect(() => {
        Aos.init({ duration: 600, delay: 100, offset: 200, easing: "ease-in-sine" });
    }, []);

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current ===  0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(imageSlides) || imageSlides.length <= 0){
        return null;
    }
   

   return (
       <section className="sliderImage" data-aos="zoom-out-right">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
       {ImageSliderData.map((imageSlide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} 
             key={index}>
            {index === current && (
             <img src={imageSlide.image} alt="/" className="image"/>    
            )}
            </div>
          )
       })}
       </section>
   )
};

export default ImageSlider;