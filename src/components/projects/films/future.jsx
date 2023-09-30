import React, { useEffect } from "react";
import "./films.css";
import { useLocation } from 'react-router-dom';

import Keratza from "../../../assets/films/keraca-visuleva.webp";
import RMS from "../../../assets/films/R_M_Stilettos.jpg";
import SMR from "../../../assets/films/snowmanreturns.jpg";
import BordersInHeaven from "../../../assets/films/posters/borders in heaven.jpg";

const Future = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  

  return (
    <main className="film">
      <div className="container p-0">
        <section
          id="previous-films"
          className="container p-3 py-4 py-md-0 pb-md-3 px-md-5 m-0"
        >
          <div className="w-100 p-0 p-xl-5 py-xl-3 " >
            <div className="row p-0 pb-4 px-3 p-xl-5 py-xl-3">
              <div className="col-12 col-md-6" id="borders-in-heaven">
                <h1>Borders in Heaven</h1>
              </div>
              <section className="synopsis container p-3 py-4 py-md-0 m-0">
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0">
                  <div className="col-12 col-md-6 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      Borders in Heaven is a fish-out-of-water romantic comedy
                      that takes place in a small village in Macedonia called
                      Heaven. The main protagonist, Donna Lee, is a native New
                      Yorker who is sent there to investigate an insurance
                      scheme perpetrated by the locals.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      The tranquil Macedonian countryside is a dramatic change
                      from Donna Lee's fast-paced life in New York. The medieval
                      village is a perfect setting for a clash of two very
                      different ways of life, and an ideal stage for surprises,
                      obstacles and emotional outbursts. Emotional borders and
                      even physical ones are shattered with the help of a
                      village patriarch, a loose-lipped mailman and a deaf and
                      hard of hearing goat herder. A US-educated village doctor
                      is the link between the two worlds and a catalyst for the
                      ripples in Donna Lee's heartbeat. Magical realism through
                      a few other local characters adds a Don Quixotesque
                      atmosphere to the film. The more realistic aspects of the
                      story are reminiscent of notable classics like Cinema
                      Paradiso, Local Hero and Il Postino.
                    </p>
                    <p>Slated for spring 2022</p>
                  </div>
               
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-center">
                    <img src={BordersInHeaven} alt="Keratza" className="img-fluid" />
                 
                  </div>
                </div>
                <div className="col-12" id="the-magic-snowman-returns">
                  <hr className="w-100 mb-5" />
                  <h1>The Magic Snowman Returns</h1>
                </div>
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0">
                  <div className="col-12 col-md-6 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      In a snow covered field somewhere in the world, Lumiukko,
                      the magic snowman, is witnessing spring. All around him
                      are the sounds and signs of the approaching season. His
                      friend Gustella, the Winter Wind, arrives to wake him. "He
                      is cutting it close," says Gustella, "he cannot be here
                      when Siroc, the Summer Wind, arrives." Away the two
                      friends fly... looking for another part of the world where
                      winter is in the air.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      A continent away in the quaint little town of Jensenville,
                      New England is the home of three inseparable friends:
                      Steven Fried and Kim and Tommy Wilson. In this part of the
                      country, Jensenville is famous for the annual Winter
                      Festival and a big ski jumping contest held at the start
                      of the school winter break. Unfortunately, this year the
                      town folks are having a hard time focusing on the Winter
                      Festival, preoccupied by the tricks of the recently
                      arrived Serena Queen who is soon to be married to Steven's
                      father, a local owner of a music store.
                    </p>
                  </div>
                  <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                    <img
                      src={SMR}
                      alt="The Magic Snowman Returns"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12" id="keratza">
                  <hr className="w-100 mb-5" />
                  <h1>Keratza</h1>
                </div>
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0 justify-content-between">
                  <div className="col-12 col-md-6 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      ...It is 1995 and a truck filled with her paintings stops
                      at the Bulgarian-Macedonian Border. It is 2 am on a cold
                      October night...
                    </p>
                    <p className="mb-3 mb-lg-4">
                      Often referred as the Frieda Kahlo of the Balkans, Keratza
                      Visulcheva was born in 1910 in a village called Nesram, in
                      the Aegean part of Macedonia, today part of Greece.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      Her story begins as a three-year old when she flees the
                      terror of the Ottoman Turks and with her parents settles
                      in nearby Bulgaria where she will spend most of her adult
                      life.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      But while her travels take her all over Europe and her
                      work is recognized by the European artistic community, she
                      will never rest trying to keep the connection with her
                      homeland open. Through her paintings, during happy times,
                      and when in the midst of a depression.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      “The depression threatened to destroy me. I simply didn't
                      want to paint any more. I started cutting my paintings.
                      Fortunately, on one occasion, a doctor who was also an
                      amateur painter saw my paintings and he encouraged me. I
                      resumed my work. I swore that I will never again reach for
                      the paintings and that I would continue."
                    </p>
                    <p>
                      At the age of 85, Keratza Visulcheva bequeathed her entire
                      artistic opus to Macedonia.
                    </p>
                  </div>
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-end">
                    <img src={Keratza} alt="Keratza" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12" id="rice">
                  <hr className="w-100 mb-5" />
                  <h1>Rice, Milk and Stilettos</h1>
                </div>
                <div className="row m-0 py-4 py-md-0 py-md-5 px-md-0 m-0 justify-content-between">
                  <div className="col-12 col-md-6 ps-0 pe-0 pe-lg-5 mb-4 mb-md-0">
                    <p className="mb-3 mb-lg-4">
                      RICE...This short film explores the traumatic effects of
                      the Cultural Revolution on Lee Chen, who in 1951
                      unknowingly participated in mass murder. Chairman Mao's
                      decrees to kill off the birds in order to increase crop
                      yield is at first amusing to a little seven-year old girl
                      who uses pots and pans to scare off the birds to the point
                      that they wall dead to the ground, from the aimless
                      exhausting flutter in the air. In 1951 there were no
                      sparrows left in China, only mosquitoes that brought
                      malaria and death to millions of people. The film is both
                      a period and contemporary tale that shows the degrading
                      nature of fascism on the human spirit.
                    </p>
                    <p className="mb-3 mb-lg-4">
                      MILK...It is the time of the goats when Marshal Tito
                      creates Yugoslavia, on the onset of World War II. It is a
                      country of a handful of intellectuals enamored with
                      communism, and millions of peasants whose meager existence
                      depends on the few farm animals they own, the most popular
                      of them, the goat. But the communist leaders of the
                      Eastern block, namely Stalin and Tito, need workers in the
                      newly formed cooperatives that can be indoctrinated to
                      become the new class. In 1949 a law is passed that calls
                      for the annihilation of the goats under the pretext that
                      the animals are destroying the forests. Those who don’t
                      kill the animals will serve jail time…
                    </p>
                    <p>
                      STILETOS...The Taliban prohibits women from wearing
                      high-heeled shoes because “they attract a man’s attention”
                      which is shameful, and a woman is stoned to death. Her
                      nine-year old daughter watches the men, including her own
                      father, kill her mother. Soon after, an international
                      lawyer rescues her from Afghanistan and helps her get
                      political asylum in the USA…
                    </p>
                  </div>
                  <div className="col-12 col-md-5 mt-4 mt-md-0 d-flex justify-content-center">
                    <img
                      src={RMS}
                      alt="Rice, Milk and Stilettos"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Future;
