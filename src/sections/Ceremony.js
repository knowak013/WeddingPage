import React from "react";
import "../Styles/main.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import placeOutline from "../Assets/place-outline.png";
import calendar from "../Assets/mdi_calendar.png";
import clock from "../Assets/mdi_clock-outline.png";
import MapIframe from "../Components/Map";
import ribbon from "../Assets/ribbon.png";

function Ceremony() {
  return (
    <div className="ceremony">
      <div className="header-with-ribbon">
        <h2>Ceremonia</h2>
        <img className="ribbon ribbon-ceremony" src={ribbon} alt="ribbon"></img>
      </div>
      <div className="ceremony-imgs-with-text">
        <div className="bajka-Imgs">
          <img className="img1" src={image1} alt="Hotel Bajka" />
          <img src={image2} alt="Hotel Bajka" />
          <img src={image3} alt="Hotel Bajka" />
        </div>
        <p className="ceremony-desc">
          Ślub i wesele to wydarzenia, które z reguły zdarzają się raz w życiu. Pragniemy, aby ten dzień był wyjątkowy. Chcemy otoczyć się najbliższymi, podzielić się z nimi emocjami, przeżyć te chwile w pięknym otoczeniu i zapamiętać je niczym obraz z bajki. Ale to JEST Bajka. Idealne miejsce na
          nasze bajkowe wesele.
        </p>
      </div>
      <div className="ceremony-details">
        <div className="ceremony-details-elements">
          <img src={placeOutline} alt="palce icon" />
          <p>Bajka Hotel & Resort, Klasztorna 5, 46-040 Grodziec</p>
        </div>
        <div className="ceremony-details-elements">
          <img src={calendar} alt="calendar icon" />
          <p>12.07.2024</p>
        </div>
        <div className="ceremony-details-elements">
          <img src={clock} alt="clock icon" />
          <p>Ceremonia rozpocznie się o godzinie 15.30 - prosimy o przybycie 20 minut wcześniej</p>
        </div>
      </div>
      <MapIframe></MapIframe>
    </div>
  );
}

export default Ceremony;
