import "./menu.css";
import React from 'react';

const Menu = ({menuOpen, setMenuOpen, menuItems, setMenuItem}) => {
  const setMenuOnClick = (item) => {
        setMenuOpen(!menuOpen);
        setMenuItem(item);
    } 
    return (
        <div className="menu-body">
            <div className={"menu " + (menuOpen && "active")}>
            <div className="left"></div>
            <div className="right">
                <div className="menuItems">
                    <ul>
                        <li>
                            <a href="#heroSection" className={(menuItems === "heroSection") ? "active" : ""} onClick={() => setMenuOnClick("heroSection")}>Hero Section</a>
                        </li>
                           <br/>
                        <li>
                            <a href="#productValue" className={(menuItems === "productValue") ? "active": ""} onClick={() => setMenuOnClick("productValue")}>Product Value</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#reviews" className={(menuItems === "reviews") ? "active" : ""} onClick={() => setMenuOnClick("reviews")}>Reviews</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#contactInfo" className={(menuItems === "contactInfo") ? "active" : ""} onClick={() => setMenuOnClick("contactInfo")}>Contact Info</a>
                        </li>
                            <br/>
                        <li>
                            <a href="#pricing" className={(menuItems === "pricing") ? "active" : ""} onClick={() => setMenuOnClick("pricing")}>Pricing</a>
                        </li>
                            <br/>
                    </ul>

                </div>

                
            </div>

        </div>
            
        </div>
    )
}

export default Menu;
