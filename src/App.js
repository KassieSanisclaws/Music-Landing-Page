import './App.css';
import React, { useState } from "react";
import HeroSection from './Components/Hero-Section/heroSection';
import ProductValue from './Components/Product-Values/productValue';
import Reviews from './Components/Reviews/reviews';
import ContactInfo from './Components/Contact-Info/contactInfo';
import TopBar from './Components/TopBar/topbar';
import Pricing from './Components/Pricing/pricing';
import ImageSlider from "./Components/ImageSlider/imageSlider";
import { ImageSliderData } from './Components/ImageSlider/imageSliderData';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import Menu from './Components/Menu/menu';
import Header from './Components/Header/header';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("heroSection");

  return (
   
    <div className="App">
      <Header />
      {/* <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setMenuItem={setMenuItem} /> */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setMenuItem={setMenuItem} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuItems={menuItem} setMenuItem={setMenuItem}/>
      <div className="sections">
       <HeroSection />
       <ProductValue />
       <Reviews />
       <ContactInfo />
       <Pricing />
       <ImageSlider imageSlides={ImageSliderData}/>
      </div> 
      <Footer />
    </div>
  
  );
}

export default App;
