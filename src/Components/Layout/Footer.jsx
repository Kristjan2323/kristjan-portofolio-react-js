import React from "react";
import { Link } from "react-scroll";
import Kristjan from "../../images/kristjan-portfolio-low-resolution-logo-color-on-transparent-background.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){

    return(
        <section className="footer">
            <div className="footer-top-cotainer">
             
                    <div className="footer-logo-pages">
                    <img className="img-logo-Kristjan" src={Kristjan} alt="logo" />
           <div className="footer-pages-cpntainer">
                    <Link           
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
            <Link           
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Skills
            </Link>
            <Link           
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="myPortofolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
            <Link           
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          
           </div>
                 
                <div>
     
                 <p className="social-container">
                    <a
                    href="https://www.linkedin.com/in/kristjan-b-904810225/"
                    className="youtube social"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faLinkedin}  />
                    </a>
                    <a
                    href="https://www.facebook.com/"
                    className="facebook social"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                    href="https://instagram.com/kristi.ballolli?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                    className="instagram social"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faInstagram}  />
                    </a>
                    <a href="https://wwww.twitter.com" 
                    className="twitter social"
                    target="_blank" rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faTwitter}  />
                    </a>
                 </p>
             </div>
             </div>
                   
                    <div className="footer-bootom-container">
                    <div className="who-created">
                        <p>Developed by Kristjan Ballolli</p>
                    </div>
                    <div className="footer-agree-service">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies Settings</p>
                    </div>
                    </div>

            </div>
        </section>
    )
}