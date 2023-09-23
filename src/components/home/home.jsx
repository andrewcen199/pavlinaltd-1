import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import TheMagicSnowmanRedux from "../../assets/films/posters/the-magic-snowman-redux.png";
import MyHeartIsNoLongerAnOrphan from "../../assets/films/posters/my-heart-is-no-longer-an-orphan.png";
import GustellaDances from "../../assets/films/posters/gustella-dances.png";
import BetweenTwoWorlds from "../../assets/films/posters/between-two-worlds.png";
import TheMagicSnowmanAudiobook from "../../assets/films/posters/the-magic-snowman-audiobook.png";
import InDevelopment from "../../assets/films/posters/in-development.png";

import header from "../../assets/brand/homepage-header.jpg";

const Home = () => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <main>
      <div className="container-fluid">
        <section id="header-container" className="row p-0">
          <div className="header col-12 p-0 m-0">
            <img src={header} alt="Placeholder" />
          </div>
        </section>
      </div>
      <div className="container mx-auto p-0 m-0">
        <section id="quote-container" className="row p-3 py-4 p-lg-0 px-lg-3">
          <div className="intro col-12 p-3 py-md-4 p-xl-5 px-xl-0 m-0">
            <h3 className="p-0 px-xl-0">
              Press on. Nothing in the world can take the place of persistence.
              Talent will not: nothing is more common than unrewarded talent.
              Education alone will not: the world is full of educated failures.
              Persistence alone is omnipotent. <span className="float-end">Calvin Coolidge</span>
            </h3>
            {/* <p className="p-0 px-xl-5 text-end">Calvin Coolidge</p> */}
          </div>
        </section>
        {/* <section
          id="active-films-container"
          className="row p-3 py-md-4 p-md-5 m-0"
        >
          <div className="col-12 p-3 py-md-4 p-xl-5 m-0">
            <h2 className="p-0 py-md-4 p-xl-5 py-xl-3 text-center">
              Active Films & Media Projects
            </h2>
            <ActiveProject
              picture={TheMagicSnowmanRedux}
              to="/magic-snowman-redux"
              title="The Magic Snowman Redux"
              synopsis={[
                "Lumiukko, the magic snowman was the voice of Roger Moore and adored by children worldwide. But he did not smile, wink or frown. He was too lazy for that!",
                <br />,
                <br />,
                "Through the wonderful possibilities offered by CGI and by adding a fresh new score and a sound mix, the re-edited version of this evergreen staple will give the new generation of children a fresh look at a film their parents grew up with.",
              ]}
              alt="The Magic Snowman Redux"
            />

            <ActiveProject
              picture={MyHeartIsNoLongerAnOrphan}
              to="/my-heart-is-no-longer-an-orphan"
              title="My Heart Is No Longer An Orphan"
              synopsis={[
                "In March of 1969, she was seventeen and he twenty years old, when they met at a poetry read in a city in Macedonia, then part of a country known as the jewel of the Balkans.",
                <br />,
                <br />,
                "He was more of a poet than she was, always brooding and sad even when he was happy. She was a bubbly tomboy who liked his attention and was tickled by the nickname he gave her, Paola.",
              ]}
              alt="My Heart Is No Longer An Orphan"
              order="order-0 order-sm-5"
            />

            <ActiveProject
              picture={GustellaDances}
              to="/gustela-dances"
              title="Gustella Dances"
              synopsis={[
                "A snowed 15th-century castle where only the spirits of knights dead long ago reign. Them, and two magical creatures made of ice and snow, a gift of planet Earth to all living creatures. They are Lumiukko and Gustella.",
                <br />,
                <br />,
                "Lumiukko is shaped as an old man, but in fact, he is a boy trapped in a snowy suit for 500 years. Gustella is the ageless wind, the travel companion who carries him from place to place.",
              ]}
              alt="Gustella Dances"
            />

            <div className="col-12 m-0 p-0 mt-5 py-0 px-xl-5">
              <hr className="mx-xl-5" />
            </div>

            <ActiveProject
              picture={BetweenTwoWorlds}
              to="/between-two-worlds"
              title="Between Two Worlds"
              synopsis={[
                "Between Two Worlds is a collection of poems written by the Montenegrin-born poet Miodrag Miloshević, whose life is the inspiration for a short film, My Heart Is No Longer An Orphan.",
                <br />,
                <br />,
                "It was the poet's wish that the English and French translations be interpretations and not direct translations. In his words, 'it should be the privilege of the readers to experience the verses mirroring their own feelings.'",
              ]}
              order="order-0 order-sm-5"
            />

            <ActiveProject
              picture={TheMagicSnowmanAudiobook}
              to="/the-magic-snowman-audiobook"
              title="The Magic Snowman"
              synopsis={[
                "Based on the feature film The Magic Snowman. With Sir Roger Moore as the voice of the magic snowman.",
                <br />,
                <br />,
                "Narrated by Lily Talevski",
                <br />,
                "Music by Ben Boian B. Goss",
                <br />,
                "Mixed by Canyon Silliman",
                <br />,
                "Sound effects by Dirk Eggermont",
              ]}
            />
          </div>
        </section> */}
        <section className="films container px-md-0 m-0 p-3 py-4 p-lg-0 px-lg-1">
          <div className="col-12 px-xl-0 pb-xl-0 m-0">
            <h2 className="p-0 px-xl-0">Active Productions</h2>
          </div>
          <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row p-0 pb-4 p-xl-0 py-xl-3">
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4 mt-lg-0">
                <Link to="/the-magic-snowman-redux">
                  <img
                    src={TheMagicSnowmanRedux}
                    className="img-fluid rounded-3"
                    alt="The Magic Snowman Redux"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4">
                <Link to="/my-heart-is-no-longer-an-orphan">
                  <img
                    src={MyHeartIsNoLongerAnOrphan}
                    className="img-fluid rounded-3"
                    alt="My Heart Is No Longer An Orphan"
                  />
                </Link>
              </div>
              <div className="film-poster py-3 py-md-2 col col-md-4 col-6 pt-lg-4">
                <Link to="/gustella-dances">
                  <img
                    src={GustellaDances}
                    className="img-fluid rounded-3"
                    alt="Gustella Dances"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row book-row p-0 pb-md-4 p-xl-5 py-xl-3 px-xl-0 justify-content-center">
              <h2 className="py-2 ps-lg-0 mb-lg-4">Media Projects</h2>
              <div className="film-poster row py-3 ps-md-4 py-md-2 pe-lg-4 col-6 col-lg">
                <div className="row w-100 h-100">
                <Link to="/between-two-worlds" className="col-12 col-lg">
                    <img
                      src={BetweenTwoWorlds}
                      className="img-fluid rounded-3"
                      alt="Between Two Worlds"
                    />
                  </Link>
                  <div className="col pt-2 py-lg-5 pt-lg-4 d-none d-lg-block">
                    <h3 className="pb-md-2 pb-2 mt-lg-2">Between Two Worlds</h3>
                    <p>Written by Мишeko</p>
                  </div>
                </div>
              </div>
              <div className="film-poster row py-3 ps-md-4 py-md-2 ps-lg-4 col-6 col-lg">
                <div className="row w-100 h-100">
                  <Link to="/the-magic-snowman-book" className="col-12 col-lg">
                    <img
                      src={TheMagicSnowmanAudiobook}
                      className="img-fluid rounded-3"
                      alt="The Magic Snowman"
                    />
                  </Link>
                  <div className="col pt-2 py-lg-5 pt-lg-4 d-none d-lg-block">
                    <h3 className="pb-md-2 pb-2 mt-lg-2">The Magic Snowman</h3>
                    <p>
                      With Sir Roger Moore
                      <br />
                      as the voice of The Magic Snowman
                      <br />
                      <br />
                      Narrated by Lilly Talevski
                      <br />
                      Music by ben Boian B. Goss
                      <br />
                      Sound Design by Mason Ryan
                      <br />
                      Release Date: April 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-3 pe-md-4 py-md-2 col-6 d-lg-none">
                <h3 className="pb-md-2 pb-2">Between Two Worlds</h3>
                <p>Written by Мишeko</p>
              </div>
              <div className="py-3 pe-md-4 py-md-2 col-6 d-lg-none">
                <h3 className="pb-md-2 pb-2">The Magic Snowman</h3>
                <p>
                  With Sir Roger Moore
                  <br />
                  as THE VOICE of The Magic Snowman
                  <br />
                  <br />
                  Narrated by Lilly Talevski
                  <br />
                  Music by ben Boian B. Goss
                  <br />
                  Sound Design by Mason Ryan
                  <br />
                  Release Date: April 2023
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 m-0 p-0 p-xl-0 py-xl-3">
            <hr/>
          </div>

          <div className="col-12 p-3 py-md-4 p-xl-5 pb-xl-0 px-xl-0 m-0 rounded text-center align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
            <h2 className="p-0">In Development</h2>
          </div>
          <div className="w-100 p-0 p-xl-0 py-xl-3">
            <div className="row p-0">
              <div className="film-poster py-3 py-md-2 col-5-12 mt-lg-0">
                <Link to="/in-development">
                  <img
                    src={InDevelopment}
                    className="img-fluid rounded-3"
                    alt="In Development"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="intro-container"
          className="row p-3 pt-0 py-md-4 px-md-0 m-0 bg-light,"
        >
          <div className="intro col-12 p-0 py-md-4 pt-xl-0 px-xl-0 m-0">
            <h2 className="p-0">
              <span className="fst-italic fw-bolder">Pavlina Ltd.</span> is a New York based independent production company
              engaged in the development and production of feature films and
              documentaries. <span className="fst-italic">FilmsZaNas d.o.o.e.l.</span> is the co-producing partner
              in the Republic of Macedonia.
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
