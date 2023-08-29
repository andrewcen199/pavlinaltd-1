import React, { useEffect } from "react";
// import emailjs from "emailjs-com";

import "./footer.css";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaVimeoSquare,
  FaImdb,
} from "react-icons/fa";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

import footerLogo from "../../assets/brand/logo-banner-white.png";

const Footer = () => {
  useEffect(() => window.scroll(0, 0));
  return (
    <footer className="text-light bg-black px-3 pt-5 pb-3 p-md-5 mt-auto ">
      <div class="container px-3 py-xl-4">
        <section>
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-12 col-md-4 px-0 mb-3 mb-md-0 d-flex justify-content-start">
                <div className="about">
                  <img src={footerLogo} height="36" alt="Pavlina Ltd. Logo" />
                  <p className="py-lg-3">©2023 PAVLINA LTD. ALL RIGHTS RESERVED</p>
                    {/* <p className="py-lg-3">
                      Pavlina Ltd. is a New York based independent production
                      company engaged in the development and production of
                      feature films and documentaries. It was incorporated in
                      1986 by Pavlina Proevska, President and General Partner.
                    </p> */}
                </div>
              </div>
              <div className="address col-12 col-md-4 p-0 mb-3 mb-md-0 text-md-center">
                <h6 className="text-uppercase mb-3 d-flex align-items-end justify-content-md-center">
                  Contact
                </h6>
                <p className="mb-1">380 Rector Place, Suite 21E</p>
                <p className="mb-3">New York, NY, USA, 10280</p>
                <p className="mb-3">pavlinaltd@gmail.com</p>
                <p>212-799-0009</p>
              </div>
              <div className="col-12 col-md-4 p-0 mb-3 mb-md-0"></div>
              {/* <div className="contact col-12 col-md-4 p-0 mb-3 mb-md-0 d-flex justify-content-start justify-content-lg-end">
                <form ref={form} onSubmit={sendEmail} autoComplete="off">
                  <div className="mb-2">
                    <label htmlFor="name" className="text-uppercase">
                      Name
                    </label>
                    <input name="name" type="text" required />
                    <hr className="m-0" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="text-uppercase">
                      Email
                    </label>
                    <input name="email" type="email" required />
                    <hr className="m-0" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="text-uppercase">
                      Message
                    </label>
                    <input name="message" type="text" required />
                    <hr className="m-0" />
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <input
                      type="submit"
                      className="text-uppercase px-4 py-2"
                      value="Contact Us"
                    />
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </section>
        <section className="mt-5 mt-lg-0  pt-xl-5">
          <hr className="py-1" />
          <div className="row">
            <ul className="col-12 col-md-6 d-flex flex-direction-row justify-content-center justify-content-md-start mb-3 mb-md-4 mb-lg-0">
              <li>
                <a
                  href="https://www.facebook.com/pproevska"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pavlina-proevska-533773169/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Info_MacArts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/PavlinaLTD/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutubeSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/user7928868"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaVimeoSquare />
                </a>
              </li>
              <li>
                <a
                  href="https://www.imdb.com/name/nm0698464/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaImdb />
                </a>
              </li>
            </ul>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
              <span className="text-uppercase">Developed by <a href="https://julianapraxedes.com/" target="_blank" rel="noreferrer">Juliana Praxedes</a></span>
            </div>
          </div>
        </section>
      </div>
      <BsFillArrowUpCircleFill title="back to top" className="back-to-top me-4 me-xl-5 mb-2 mb-xl-4" onClick={function() {window.scroll(0, 0)}}/>
    </footer>
  );
};

export default Footer;
