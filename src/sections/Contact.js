import React, { useState, useEffect } from "react";
import "../Styles/Contact.css";
import imagKamila from "../Assets/Kamila.jpg";
import imageLukasz from "../Assets/Lukasz.jpg";
import ribbon from "../Assets/ribbon.png";

function Contact() {
  return (
    <div className="container contact-container">
      <div className="header-with-ribbon">
        <h2 className="contact-header">Kontakt</h2>
        <img className="ribbon" src={ribbon} alt="ribbon"></img>
      </div>

      <div className="contact">
        <div className="person-container">
          <div className="round-image">
            <img src={imagKamila} alt="Kamila"></img>
          </div>
          <p>tel: 609 598 312</p>
        </div>
        <div className="person-container">
          <div className="round-image">
            <img src={imageLukasz} alt="Łukasz"></img>
          </div>
          <p>tel: 667 220 104</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
