import React, { useState, useEffect } from "react";
import "../Styles/OrganizationalMatters.css";
import party from "../Assets/party.svg";
import hotel from "../Assets/hotel.svg";
import bus from "../Assets/bus.svg";
import flower from "../Assets/flower.svg";
import puzzle from "../Assets/puzzle.svg";
import alko from "../Assets/alko.svg";
import lotto from "../Assets/lotto.svg";
import ribbon from "../Assets/ribbon.png";

function OrganizationalMatters() {
  return (
    <div className="container Organizational-matters-container">
      <div className="header-with-ribbon">
        <h2>Sprawy organizacyjne</h2>
        <img className="ribbon ribbon-Organizational-matters" src={ribbon} alt="ribbon"></img>
      </div>

      <div className="Organizational-matters">
        <div className="Organizational-matters--box">
          <div className="image-with-text-container">
            <img src={party} alt="party icon"></img>
            <h3>Ceremonia</h3>
          </div>
          <p>Ceremonia zaślubin odbędzie się w plenerze na terenie “Bajka Hotel & Resort” w Grodźcu.</p>
        </div>
        <div className="Organizational-matters--box">
          <div className="image-with-text-container">
            <img src={bus} alt="party icon"></img>
            <h3>Dojazd</h3>
          </div>
          <div>
            <p>Zapewniamy transport na salę w postaci autokaru. Po weselu autokar także będzie rozwoził chętnych.</p>
          </div>
        </div>
        <div className="Organizational-matters--box">
          <div className="image-with-text-container">
            <img src={hotel} alt="party icon"></img>
            <h3>Nocleg</h3>
          </div>
          <div>
            <p>Na terenie obiektu istnieje możliwość rezerwacji noclegu (domki lub pokoje hotelowe). Otrzymujecie 10% zniżki jeżeli w trakcie rezerwacji powołacie się na nas i nasze wesele.</p>
          </div>
        </div>
        {/* <div className="Organizational-matters--box large-item">
          <div className="image-with-text-container">
            <img src={flower} alt="party icon"></img>
            <h3>Kwiaty</h3>
          </div>
          <div>
            <p>Zamiast kwiatów będzie nam miło otrzymać:</p>
          </div>
          <div className="small-image-with-text-container">
            <img src={alko} alt="alkohol icon"></img>
            <p>Alkohol</p>
          </div>
          {/*  <div className="small-image-with-text-container">
            <img src={puzzle} alt="puzzle icon"></img>
            <p>Gry towarzystkie</p>
          </div>
          <div className="small-image-with-text-container">
            <img src={lotto} alt="lotto icon"></img>
            <p>Kupony lotto</p>
          </div>
          <p></p>
        </div>*/}
      </div>
    </div>
  );
}

export default OrganizationalMatters;
