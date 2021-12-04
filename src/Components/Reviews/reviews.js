import'./reviews.css';
import React, { useEffect } from 'react'
import SpeakerImage from "../../Images/SmallSpeaker1-03.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
    useEffect(() => {
        Aos.init({ duration: 600, offset: 200, easing: "ease-in-sine", delay: 100, });
    }, []);

    return (
        <div className="reviews-body">
            <h1>Reviews</h1>
            <div className="reviews-sections">
                 <div className="reviews-image">
                     <img src={SpeakerImage} alt="/"data-aos="flip-up"/>
                 </div>
                  
                <div className="reviews-cards">

                    <div className="reviews-card1">
                        <div className="reviews-card1-body"data-aos="fade-up-right">
                          <div className="reviews-card1-body-section1" data-aos="slide-up"></div>
                          <div className="reviews-card1-body-section2"><p>"Love it, It's The Best. I Can't Live Without It!".</p></div>
                        </div>
                    </div>

                    <div className="reviews-card2">
                        <div className="reviews-card2-body" data-aos="fade-up-left">
                          <div className="reviews-card2-body-section1" data-aos="slide-down"></div>
                          <div className="reviews-card2-body-section2"><p>"An Amazing User Experience. I Love It!".</p></div>
                        </div>
                    </div>
                    <div className="reviews-card3">
                        <div className="reviews-card3-body" data-aos="fade-up-left">
                          <div className="reviews-card3-body-section1" data-aos="slide-down"></div>
                          <div className="reviews-card3-body-section2"><p>"This Is Sick!! I'm Obsessed".</p></div>
                        </div>
                    </div>
                    <div className="reviews-card4">
                        <div className="reviews-card4-body" data-aos="fade-up-right">
                          <div className="reviews-card4-body-section1" data-aos="slide-up"></div>
                          <div className="reviews-card4-body-section2"><p>"I Use It Before Games, And Practices!".</p></div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
