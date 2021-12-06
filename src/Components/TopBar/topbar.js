import "./topbar.css";
import React from 'react';

const TopBar = ({menuOpen, setMenuOpen, setMenuItem}) => {
    const setMenuOnClick = (item) => {
        setMenuItem(item);
    }

    return (
        <div className="topbar-body">
            <div className="topbar-sections">
               <div className="topbar-left"> 
               <a href="#intro" className="logo" onClick={() => setMenuOnClick("heroSection")}>
            <span>Epicon</span>  
          
          </a>
               </div>
               <div className="topbar-right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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

export default TopBar;
