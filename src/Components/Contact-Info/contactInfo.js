import'./contactInfo.css';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactInfo() {
    useEffect(() => {
        Aos.init({ duration: 600, delay: 100, offset: 200, easing: "ease-in-sine", });
    }, []);

    return (
        <div className="contactInfo-body">
            <h1>Contact Us</h1>
            <div className="contactInfo-section">

               <div className="contactInfo-mainCard" data-aos="slide-left">
                   <div className="contactInfo-main-header">
                       
                   </div>
                   <div className="contactInfo-main-card">
                         <ul>
                             <li><p>Email: letschat@epicon.ca</p></li>
                             <n/>
                             <li><p>Phone: 416-738-2475</p></li>
                             <n/>
                             <li><p>Address: 123 Toronto Street East. Toronto ON, Canada L5D 8G5</p></li>
                         </ul>

                   </div>
               </div>


            </div>
        </div>
    )
}
