import "./topbar.css";
import React from 'react'

export default function TopBar() {
    return (
        <div className="topbar-body">
            <div className="topbar-sections">
               <div className="topbar-left"> 
               <a href="#intro" className="logo" onClick={"/"}>
            <span>Epicon</span>  
          
          </a>
               </div>
               <div className="topbar-right">
                    <div className="hamburger" onClick={"/"}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                        <span className="line4"></span>
              
              </div>      
          </div>
            </div>
        </div>
    )
}
