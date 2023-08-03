import React, { useEffect } from "react";
import "./films.css";

import Poster from "../../../assets/films/posters/between-two-worlds.png";
import Poem from "../../../assets/films/between-poem.png";
import Review from "../../../assets/films/between-review.png";

const Between = () => {
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
                <h1>Between Two Worlds</h1>
              </div>
              <section className="synopsis container p-3 py-4 py-md-0 m-0">
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0">
                  <div className="col-12 col-md-7 col-lg-8 col-xl-9 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      Between Two Worlds is a collection of poems written by the
                      Montenegrin-born poet Miodrag Miloshević, whose life is
                      the inspiration for a short film, My Heart Is No Longer An
                      Orphan.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      The film tells the story of two young poets who fall in
                      love at a poetry festival in Macedonia, in 1969 where they
                      spend three days that will mark them for the rest of their
                      lives. Separated by a series of events that will keep them
                      apart for the next fifty years, the poet, now 70-years old
                      finds the girl. The poems in the book reflect his search
                      and longing for something that he lost half a century ago.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      It was the poet's wish that the English and French
                      translations be interpretations and not direct
                      translations. In his words, "it should be the privilege of
                      the readers to experience the verses mirroring their own
                      feelings."
                    </p>
                    <p className="mb-3 mb-lg-4">
                      The illustrations by Kathi Ha add a palpable feeling to
                      the words on the page and allows the reader to catch a
                      glimpse of the poet's dark and longing heart.
                    </p>
                    <p className="mb-3 mb-lg-4">Available on Amazon Books</p>
                  </div>
                  <div className="col-12 col-md-5 col-lg-4 col-xl-3 pe-0 ps-0 ps-md-5 d-flex align-items-center">
                    <img src={Poster} alt="" className="img-fluid rounded-4" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <div className="row m-0 p-0 pb-4 px-3 p-xl-5">
          <div className="col-12 col-md-11 mx-auto">
            <img src={Poem} alt="Poem" className="img-fluid" />
          </div>
          <div className="col-12 col-md-11 mx-auto">
            <img src={Review} alt="Review" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Between;
