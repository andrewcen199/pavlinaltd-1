import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/the-magic-snowman-redux.png";

const Redux = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <main className="film">
      <div className="container p-0">
        <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0"
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3">
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6">
                <h1 className="mb-5">The Magic Snowman REDUX</h1>
                <h2>Director</h2>
                <p className="mb-3 mb-lg-4">C. Stanner</p>
                <h2>Produced by</h2>
                <p className="mb-3 mb-lg-4">Pavlina Proevska</p>
                <p className="mb-3 mb-lg-4">
                  With Roger Moore as the voice of Lumiukko
                </p>
                <h2>The Children</h2>
                <p>Justin Fried, Dragana Marjanovic, Pavle Bojkovski</p>
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/hUMfTop4K-g"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="p-0 pb-4 px-3 p-xl-5 bg-light">
          <section className="synopsis container p-3 py-4 py-md-0 px-md-5 m-0">
            <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 px-xl-5 m-0">
              <div className="col-12 col-md-4 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0 d-flex align-items-center">
                <img src={Poster} alt="" className="img rounded-4" />
              </div>
              <div className="col-12 col-md-8 pe-0 ps-0 ps-md-5">
                <p className="mb-3 mb-lg-4">
                  THEN: Lumiukko, the magic snowman was the voice of Roger Moore
                  and adored by children worldwide. But he did not smile, wink
                  or frown. He was too lazy for that!
                </p>
                <p className="mb-3 mb-lg-4">
                  In the 2022 reduxed version of this perennial children's film,
                  Lumiukko will get visibly angry, sad, concerned, and often,
                  annoyed.
                </p>
                <p className="mb-3 mb-lg-4">
                  With his myriad of emotions, he will engage the children more
                  than ever before and ultimately teaches them to believe in
                  themselves and the choices they have to make.
                </p>
                <p>
                  Through the wonderful possibilities offered by CGI and by
                  adding a fresh new score and a sound mix, the re-edited
                  version of this evergreen staple will give the new generation
                  of children a fresh look at a film their parents grew up with.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Redux;
