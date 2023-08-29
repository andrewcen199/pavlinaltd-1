import React, { useEffect } from "react";
import "./about.css";

import CarouselItem from "./carousel";

import ellis from "../../assets/bio/ellis.jpg";
import cbsnews from "../../assets/bio/cbsnews.jpg";
import senator from "../../assets/bio/senator.jpg";
import dubai from "../../assets/bio/dubai.jpg";
import maestro from "../../assets/bio/maestro.jpg";
import afm from "../../assets/bio/afm.jpg";
import pavlina from "../../assets/bio/pavlina6.jpg";

const About = () => {
  useEffect(() => window.scroll(0, 0));

  return (
    <main id="about" className="container p-3 py-4 p-lg-0">
      <div className="about-container px-3 py-4 p-lg-0">
        <div className="company row m-0 mb-4">
          <div className="col-12 p-0 pe-lg-3 mb-4 mb-lg-0">
            <h2 className="text-center mb-4">
              Production - A combination of persistence ... and blind faith.
            </h2>
          </div>
          <div className="col-12 col-lg-6 col-xl-4  p-0 pe-lg-3 mb-4 mb-lg-0">
            <div
              id="AboutCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <CarouselItem
                  image={cbsnews}
                  alt="With the CBS News 1984' Summer Olympics Team"
                  caption="With the CBS News 1984' Summer Olympics Team"
                  active
                />
                <CarouselItem
                  image={senator}
                  alt="With Senator Alfonse D'Amato, at CBS News, 1986"
                  caption="With Senator Alfonse D'Amato, at CBS News, 1986"
                />
                <CarouselItem
                  image={maestro}
                  alt="With Maestro Simon Trpchevski, 2001"
                  caption="With Maestro Simon Trpchevski, 2001"
                />
                <CarouselItem
                  image={ellis}
                  alt="With Ellis Island Medal of Honor Recipients, 2005"
                  caption="With Ellis Island Medal of Honor Recipients, 2005"
                />
                <CarouselItem
                  image={dubai}
                  alt="At the Dubai Festival, 2009"
                  caption="At the Dubai Festival, 2009"
                />
                <CarouselItem
                  image={afm}
                  alt="American Film Market, 2015"
                  caption="American Film Market, 2015"
                />
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#AboutCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#AboutCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-8  p-0 ps-lg-4 mb-4 mb-lg-0">
            <p className="mb-2 mb-xl-2">
              <strong className="fs-5">PAVLINA Ltd.</strong> is a New York based
              independent production company engaged in the development and
              production of feature films and documentaries. It was incorporated
              in 1986 by Pavlina Proevska, President and General Partner. The
              co-producing partner of Pavlina Ltd., FilmsZaNas DOOEL is based in
              The Republic of Macedonia.
            </p>
            <p className="mb-2 mb-xl-2">
              The first feature film produced by Pavlina Ltd. in 1987 was{" "}
              <span className="fst-italic">The Magic Snowman</span>, a live
              action children's fairy tale starring Roger Moore as the voice of
              the Magic Snowman. The film's gross receipts to date are ten times
              the original low-budget cost. Distributed through Miramax/Buena
              Vista International it has been seen by twenty million children in
              the United States.
            </p>
            <p className="mb-2 mb-xl-2">
              The second feature produced in 1992 was the supernatural thriller
              <span className="fst-italic">Happy Hell Night</span>, starring
              Darren McGavin. The film was distributed worldwide by several
              international distributors and released on DVD by AnchorBay
              entertainment. More recently, the legendary Samuel Goldwyn Films
              acquired the rights of distribution for North America.
            </p>
            <p className="mb-2 mb-xl-2">
              To ensure a successful distribution life and minimize investment
              risks, the company focuses on development and production of
              perennial stories. In keeping with such business strategy, over
              the past ten years the company has financed the acquisition and
              development of several children's properties.
            </p>
            <p>
              The company's strength is the original content of the stories it
              develops and produced and while through its feature films it
              offers popular entertainment, the documentaries celebrate people
              whose lives have left an imprint on the human experience.
            </p>
          </div>
          <div className="col-12 p-3 py-4 p-xl-5 m-0">
            <h2 className="jung-quote text-center p-0">
              The creative mind plays with the objects it loves.{" "}
              <span className="float-end">Calvin Coolidge</span>
            </h2>
          </div>
          <div className="col-12 p-0 pe-lg-3 mb-4 mb-lg-0">
            <p className="mb-2 mb-xl-2">
              <img
                src={pavlina}
                alt="Pavlina Proevska"
                className="float-start p-2"
              />
              A native of Macedonia,{" "}
              <strong className="fs-5">Pavlina Proevska</strong> studied Public
              Relations in Paris and worked in the news department at With the
              CBS News 1984' Summer Olympics Team as well as in the field, for
              USA Cable Networks. The highlights of her tenure at With the CBS
              News 1984' Summer Olympics Team was as part of the team covering
              the Regan-Gorbachev Summit in Geneva, in 1986. For the USA Cable
              Network, she was part of the team working on the promotion of the
              thriller Death Train, in Slovenia in 1993 where she was introduced
              to Irish drinking by the star of the film, Pierce Brosnan.
            </p>
            <p className="mb-2 mb-xl-2">
              Ms. Proevska is currently working on the REDUX of The Magic
              Snowman for release on DVD/Blu-Ray and VOD platforms in 2022. She
              is also in pre-production of a short docu-drama, My Heart Is No
              Longer an Orphan, and she will be directing it late this summer in
              Montenegro, Macedonia.
            </p>
            <p className="mb-2 mb-xl-2">
              She has recently completed two documentary films, The Promise of
              Perfume, and the biopic My American Pilgrimage.
            </p>
            <p className="mb-2 mb-xl-2">
              Ms. Proevska is active in the promotion of Macedonia's cultural
              heritage as the founder and Executive Director of the Macedonian
              Arts Council. She is fluent in five languages and lives and works
              in New York City.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
