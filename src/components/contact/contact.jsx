import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
// import SimpleMap from "./map";

const Contact = () => {
  useEffect(() => window.scroll(0, 0));

  // const location = {
  //   address: "380 Rector Pl., 21E New York, NY 10280, USA",
  //   lat: 40.709341162526115,
  //   lng: -74.01780974617034,
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9flvwpo",
        "pavlina_test",
        form.current,
        "yUFmfhgeWtbBEPp6l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main id="contact">
      <section className="upper-section container p-0 p-3 px-lg-0 py-4 py-lg-0">
        {/* <div className="px-3 px-xl-5 py-4">
          <h1 className="m-0 ps-xl-5">Get in Touch</h1>
        </div> */}
        <div className="contact-info px-1 px-lg-0 pb-3 pb-lg-5">
          <div className="row m-0 m-0 justify-content-between pb-lg-5">
            <div className="contact-box row col-12 col-md-7 col-xl ps-lg-0 pb-md-3 pb-lg-0 pe-md-0 mb-1 mb-md-0">
              <div className="col-12 col-xl-4">
                <h2 className="mb-1">Pavlina Ltd.</h2>
                <h3>Email</h3>
                <h4 className="mb-1">pavlinaltd@gmail.com</h4>
                <h3>Phone | Viber | WhatsApp </h3>
                <h4 className="mb-1">212-799-0009</h4>
                <h3>Skype</h3>
                <h4 className="mb-1">Resen51</h4>
                <h3>Twitter</h3>
                <h4 className="mb-1">@SNOWMANREDUX</h4>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <h2 className="mb-1 mt-1">FilmsZaNac D.O.O.E.L</h2>
                <h3>Email</h3>
                <h4 className="mb-1">filmszanas@gmail.com</h4>
                <h3>Phone</h3>
                <h4 className="mb-1">212-799-0009</h4>
              </div>
              <div className="col-12 col-md-6 col-xl-4">
                <h2 className="mb-1 mt-1">Macedonian Arts Council</h2>
                <h3>Email</h3>
                <h4>info@macedonianarts.org</h4>
                <h4 className="mb-1">macartsorg@gmail.com</h4>
                <h3>Phone</h3>
                <h4 className="mb-1">212-799-0009</h4>
              </div>
            </div>
            <div className="contact-box col-12 col-md-5 col-xl-3 ps-lg-4 pb-md-3 pb-lg-0 pe-md-0 mb-1 mb-md-0">
              <form
                id="contact-form"
                ref={form}
                onSubmit={sendEmail}
                autoComplete="off"
                className="h-100"
              >
                <div className="mb-1">
                  <input name="name" placeholder="Name" type="text" required />
                </div>
                <div className="mb-1">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-1 textarea">
                  <textarea
                    placeholder="Message"
                    name="message"
                    form="contact-form"
                    className="w-100 h-100 p-0"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-start justify-content-md-end">
                  <input
                    type="submit"
                    className="text-uppercase px-4 py-2"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
            <div className="contact-box col-12 col-xl-3 pe-md-0 mb-1 mb-md-0 ps-md-0 pt-md-5 pt-xl-0 ps-lg-0 ps-xl-2">
              <iframe
                className="google-map h-100 w-100"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.404149276478!2d-74.02011378453007!3d40.70911877933224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1021509aa5%3A0x875c1c5d6844bf1!2s380%20Rector%20Pl%2C%20New%20York%2C%20NY%2010280%2C%20USA!5e0!3m2!1sen!2sbr!4v1673380162092!5m2!1sen!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
