import React from "react";
import "./Header.css";


const Header = ({ homeRef })=>{
    return(
        <header>
            <div ref={homeRef} className="container" >
                <div className="left-side">
                    
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam et purus a odio finibus bibendum amet leo.</p>
                <div className="header-but">
                <button className="order-but">order now</button>
                <button className="learn-but">learn more</button>
                </div>
                </div>
 
            </div>
        </header>
    )
}

export default Header;