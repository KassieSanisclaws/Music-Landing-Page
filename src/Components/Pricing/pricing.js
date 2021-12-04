import "./pricing.css";
import React, { useEffect } from 'react';
import SpeakerImage from "../../Images/SmallSpeaker2-03.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
    useEffect(() => {
        Aos.init({ duration: 600, delay: 100, easing: "ease-in-sine", offset: 200, });
    }, []);
    return (
        <div className="pricing-body">
             <h1 className="pricing-body-h1">Pricing</h1>
             <div className="pricing-section">
                 <div className="pricing-image">
                     <img src={SpeakerImage} alt="/" data-aos="zoom-in-up"/>
                 </div>
            
            <div className="pricing-container" data-aos="fade-down-left">
                <div className="pricing-header">
                </div>
               <div className="pricing-content-cards">

                 <div className="pricing-content-card1">
                 <div className="pricing-card1-header">
                         <h1>Basic plan For $9 a Month:</h1>
                     </div>
                     <ul>
                         <n/>
                         <li> <p>Great Sound Quality</p> </li>
                         <n/>
                         <li> <p>Good Music Library</p> </li>
                         <n/>
                         <li> <p>Excellent Song Choices</p> </li>
                         <n/>
                         <li> <p>Basic Amount Of Visuals</p> </li>
                         <n/>
                     </ul>   
                 </div>
                 <div className="pricing-content-card2">
                     <div className="pricing-card2-header">
                         <h1>Advanced Plan For $99 Per Year:</h1>
                     </div>
                     <ul>
                         <n/>
                         <li> <p>Amazing Sound Quality</p> </li>
                         <n/>
                         <li> <p>Great Music Library</p> </li>
                         <n/>
                         <li> <p>Even Better Song Choices</p> </li>
                         <n/>
                         <li> <p>Amazing Visuals</p> </li>
                         <n/>
                     </ul>
                 </div>
                 <div className="pricing-content-card3">
                 <div className="pricing-card3-header">
                         <h1>Pro Plan For $150 Per Year:</h1>
                     </div>
                      <ul>
                         <n/>
                         <li> <p>Incredible Sound Quality</p> </li>
                         <n/>
                         <li> <p>Unbelievable Music Library</p> </li>
                         <n/>
                         <li> <p>Crazy Good Song Choices</p> </li>
                         <n/>
                         <li> <p>Amazing Visuals</p> </li>
                         <n/>
                     </ul>
                 </div>

             </div>
            </div>
           </div>
        </div>
    )
}
