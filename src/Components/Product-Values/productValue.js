import './productValue.css';
import React from 'react';
import {useEffect, useRef } from 'react';
import { init } from 'ityped';
import SpeakerImage from "../../Images/medium17.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProductValue() {
    const textRef = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();

    useEffect(() => {
        init(textRef.current, {
         showCursor: true,
         backDelay: 4500,
         backSpeed: 80,
         strings: ["Experience Live Versions Of Your Favourite Songs!"],
        });
    }, []);

    useEffect(() => {
        init(textRef2.current, {
         showCursor: true,
         backDelay: 5500,
         backSpeed: 80,
         strings: ["Experience Concerts Up Close & Personal!"],
        });
    }, []);

    useEffect(() => {
        init(textRef3.current, {
         showCursor: true,
         backDelay: 6500,
         backSpeed: 80,
         strings: ["No Commitment, Cancel Anytime!"],
        });
    }, []);

    useEffect(() => {
        init(textRef4.current, {
         showCursor: true,
         backDelay: 7500,
         backSpeed: 80,
         strings: ["Never Worry About Forgetting A Payment Again!"],
        });
    }, []);

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className="productValue-body">
              <div className="productValue-sections">
                  <div className="productValue-image">
                    <img src={SpeakerImage} alt="/" data-aos="fade-down"/>
                  </div>
                    
                    <div className="productValue-card-section">
                       <div className="productValue-section-cards">
                         <div className="productValue-card1">
                            <h1 className="intro-card1" data-aos="flip-left">Superior Sound:  <span ref={textRef}></span></h1>
                         </div>
                        <div className="productValue-card2">
                            <h1 className="intro-card2" data-aos="flip-left">Front Row Seats: <span ref={textRef2}></span></h1>
                        </div>
                        <div className="productValue-card3">
                            <h1 className="intro-card3" data-aos="flip-left">Subscription Payment Model: <span ref={textRef3}></span></h1>
                        </div>
                        <div className="productValue-card4">
                            <h1 className="intro-card4" data-aos="flip-left">No Fee Cancelation Policy: <span ref={textRef4}></span></h1>
                        </div>
                       </div>
                    </div>

              </div>
        </div>
    )
}
