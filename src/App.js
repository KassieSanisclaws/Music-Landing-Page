import './App.css';
import React, { useEffect } from "react";
import HeroSection from './Components/Hero-Section/heroSection';
import ProductValue from './Components/Product-Values/productValue';
import Reviews from './Components/Reviews/reviews';
import ContactInfo from './Components/Contact-Info/contactInfo';
import TopBar from './Components/TopBar/topbar';
import Pricing from './Components/Pricing/pricing';
import ImageSlider from "./Components/ImageSlider/imageSlider";
import { ImageSliderData } from './Components/ImageSlider/imageSliderData';
import Footer from './Components/Footer/footer';


function App() {

  return (
   
    <div className="App">
      <TopBar />
      <div className="sections">
       <HeroSection />
       <ProductValue />
       <Reviews />
       <ContactInfo />
       <Pricing />
       <ImageSlider imageSlides={ImageSliderData} />
      </div> 
      <Footer />
    </div>
  
  );
}

export default App;
