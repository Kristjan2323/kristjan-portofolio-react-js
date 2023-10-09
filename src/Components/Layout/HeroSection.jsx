import React from "react";
import heroImage3 from "../../images/hero3.jpg"
import { Link } from "react-scroll";

export default function HeroSection(){

    return(
        <main id="heroSection" className="hero hero-section-container">
            <div className="hero hero-section-left" >
                <p className="hero-section-intro">Hey, I'm Kristjan</p>
                <h2 className="hero-section-Job">Full Stcack Developer</h2>
                <p className="hero-section-desc">I am passionate Full Stack Developer with a love for crafting web experiences.
                 I specialize in creating dynamic and interactive websites and applications using a variety of technologies. </p>
                 <Link
             
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contactMe"
              className="btn btn-get-InTouch"
            >
              Get in Touch
            </Link>
                
            </div>
            <div className="herosection-right">
             <img src={heroImage3} alt="heroImage" />     
            </div>
        </main> 
    )
}