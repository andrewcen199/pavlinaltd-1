import React, { useEffect } from "react";
// import emailjs from "emailjs-com";

import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {FaSkype} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaVimeoSquare,
  FaImdb,
  BsFacebook,
  FaViber,
  FaWhatsapp,


} from "react-icons/fa";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import footerLogo from "../../assets/brand/logo-banner-white.png";

const Footer = () => {
  useEffect(() => window.scroll(0, 0));
  return (
    <footer className="text-light custom-bg-color px-3 pt-5 pb-3 p-md-5 mt-auto ">
      
       <div className="container">
          <img src={footerLogo} height="36" alt="Pavlina Ltd. Logo" />
          <div className="row">
            <div className="col">
              
            </div>
            <div className=" bottom-links col">
              <Link
                class="nav-link pb-2 px-lg-2 ms-lg-5"
                to="/home"
              >
                Home
              </Link>
               <Link
                class="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/about"
              >
                About Us
              </Link>
              <Link
                class="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/the-films"
              >
                Filmography
              </Link>
              <Link
                class="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/gallery/"
              >
                Gallery
              </Link>
              <Link
                class="nav-link py-4 py-lg-2 px-lg-2 ms-lg-5"
                to="/contact/"
              >
                Contact
              </Link>




            </div>
            <div className=" bottom-contact col">
                <h3><FontAwesomeIcon icon={faLocationDot} />  380 Rector Pl. New York, NY 10280 USA</h3>
                <h3> <FontAwesomeIcon icon={faPhone} />  <FaWhatsapp/>   <FaViber/>  (212)799-0009</h3>
                <h3> <FaSkype/> Resen51</h3>
                
                <h3><FontAwesomeIcon icon={faEnvelope} />  pavlinaltd@gmail.com</h3>
                <br></br>
                <div className="bottom-icons">
                  <a
                    href="https://www.facebook.com/pproevska"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare color='white' size={30}/>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pavlina-proevska-533773169/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin color='white' size={30}/>
                  </a>
                  <a
                    href="https://twitter.com/Info_MacArts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitterSquare color='white' size={30}/>
                  </a>
                  <a
                    href="https://www.youtube.com/user/PavlinaLTD/videos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutubeSquare  color='white'size={30}/>
                  </a>
                  <a
                    href="https://www.imdb.com/name/nm0698464/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaImdb color='white' size={30} />
                  </a>
                </div>

            </div>
            
           
          

          </div>
       
          
       </div>
     
    </footer>
  );
};

export default Footer;
