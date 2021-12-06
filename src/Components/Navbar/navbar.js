import "./navbar.css";
import React from 'react';

const Navbar = ({menuOpen, setMenuOpen, setMenuItem}) => {
   const setMenuOnClick = (item) => {
       setMenuItem(item);
   }

    return (
        <div className="navbar-body">
             <div className="navbar-section" >
             <div className="navbar-left"> 
               <a href="#intro" className="logo" onClick={() => setMenuOnClick("intro")}>
            <span className="logo-span">Epicon</span>
            <span className="logo-span2">Muzic</span> 
          
          </a>
               </div>
               <div className="navbar-right">
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

export default Navbar;