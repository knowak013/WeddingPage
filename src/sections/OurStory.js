import React, { useState, useEffect } from "react";
import "../Styles/OurStory.css";
import image1 from "../Assets/1.jpg";
import image2 from "../Assets/2.jpg";
import image3 from "../Assets/3.jpg";
import image4 from "../Assets/4.jpg";
import image5 from "../Assets/5.jpg";
import image6 from "../Assets/6.jpg";
import image7 from "../Assets/7.jpg";
import image8 from "../Assets/8.jpg";
import ribbon from "../Assets/ribbon.png";

function OurStory() {
  return (
    <div className="container our-story-container">
      <div className="header-with-ribbon">
        <h2 className="h2-our-story">Nasza historia</h2>
        <img className="ribbon ribbon-our-story" src={ribbon} alt="ribbon"></img>
      </div>
      <div className="our-story-images">
        <div className="image-container">
          <img src={image1} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image2} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image3} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image4} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image5} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image6} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image7} alt="wspolne zdjecie" />
        </div>
        <div className="image-container">
          <img src={image8} alt="wspolne zdjecie" />
        </div>
      </div>
      <div className="our-story">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="57" viewBox="0 0 12 57" fill="none">
          <path d="M6.11545 0.227651L0.227651 5.88455L5.88455 11.7723L11.7723 6.11545L6.11545 0.227651ZM4.0004 55.97C3.98936 56.5222 4.42803 56.9788 4.9802 56.9898C5.53238 57.0008 5.98896 56.5622 6 56.01L4.0004 55.97ZM5.0002 5.98L4.0004 55.97L6 56.01L6.9998 6.02L5.0002 5.98Z" fill="#CC93A4" />
        </svg>
        <h4>2008 rok</h4>
        <p>Kończymy szkołę podstawową i spotykamy się w tej samej klasie.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="57" viewBox="0 0 13 57" fill="none">
          <path d="M7.5 0.98999C7.5 0.437705 7.05228 -0.0100098 6.5 -0.0100098C5.94772 -0.0100098 5.5 0.437705 5.5 0.98999L7.5 0.98999ZM6.5 56.7635L12.2735 50.99L6.5 45.2165L0.726497 50.99L6.5 56.7635ZM5.5 0.98999L5.5 50.99H7.5L7.5 0.98999L5.5 0.98999Z" fill="#CC93A4" />
        </svg>
        <h4>24.06.2010 roku</h4>
        <p>Zostajemy parą.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="57" viewBox="0 0 12 57" fill="none">
          <path d="M6.11545 0.227651L0.227651 5.88455L5.88455 11.7723L11.7723 6.11545L6.11545 0.227651ZM4.0004 55.97C3.98936 56.5222 4.42803 56.9788 4.9802 56.9898C5.53238 57.0008 5.98896 56.5622 6 56.01L4.0004 55.97ZM5.0002 5.98L4.0004 55.97L6 56.01L6.9998 6.02L5.0002 5.98Z" fill="#CC93A4" />
        </svg>
        <h4>2011 rok</h4>
        <p>Jesteśmy na prawdę super. Wystarczająco super żeby wygrać tytuł pary roku w naszej ówczesnej szkole.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="57" viewBox="0 0 13 57" fill="none">
          <path d="M7.5 0.98999C7.5 0.437705 7.05228 -0.0100098 6.5 -0.0100098C5.94772 -0.0100098 5.5 0.437705 5.5 0.98999L7.5 0.98999ZM6.5 56.7635L12.2735 50.99L6.5 45.2165L0.726497 50.99L6.5 56.7635ZM5.5 0.98999L5.5 50.99H7.5L7.5 0.98999L5.5 0.98999Z" fill="#CC93A4" />
        </svg>
        <h4>Sierpień 2017 roku</h4>
        <p>Bierzemy sprawy w swoje ręce i wyprowadzamy się do Katowic wynajmując mieszkanie.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="57" viewBox="0 0 12 57" fill="none">
          <path d="M6.11545 0.227651L0.227651 5.88455L5.88455 11.7723L11.7723 6.11545L6.11545 0.227651ZM4.0004 55.97C3.98936 56.5222 4.42803 56.9788 4.9802 56.9898C5.53238 57.0008 5.98896 56.5622 6 56.01L4.0004 55.97ZM5.0002 5.98L4.0004 55.97L6 56.01L6.9998 6.02L5.0002 5.98Z" fill="#CC93A4" />
        </svg>
        <h4>Marzec 2020 roku</h4>
        <p>Wprowadzamy się do “swoich” czterech ścian. Razem z rodzicami udaje się nam skończyć remont tuż przed pandemią.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="57" viewBox="0 0 13 57" fill="none">
          <path d="M7.5 0.98999C7.5 0.437705 7.05228 -0.0100098 6.5 -0.0100098C5.94772 -0.0100098 5.5 0.437705 5.5 0.98999L7.5 0.98999ZM6.5 56.7635L12.2735 50.99L6.5 45.2165L0.726497 50.99L6.5 56.7635ZM5.5 0.98999L5.5 50.99H7.5L7.5 0.98999L5.5 0.98999Z" fill="#CC93A4" />
        </svg>
        <h4>09.09.2023 roku</h4>
        <p> Nasza przyjaciółka bierze ślub w który oboje byliśmy mocno zaangażowani. Przy półrocznych przygotowaniach poznaliśmy uroczystość zaślubin od zaplecza i mocno nas to zainspirowało.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="57" viewBox="0 0 12 57" fill="none">
          <path d="M6.11545 0.227651L0.227651 5.88455L5.88455 11.7723L11.7723 6.11545L6.11545 0.227651ZM4.0004 55.97C3.98936 56.5222 4.42803 56.9788 4.9802 56.9898C5.53238 57.0008 5.98896 56.5622 6 56.01L4.0004 55.97ZM5.0002 5.98L4.0004 55.97L6 56.01L6.9998 6.02L5.0002 5.98Z" fill="#CC93A4" />
        </svg>
        <h4>13.10.2023 roku</h4>
        <p> Jesteśmy w Wenecji...ten dzień okaże się jednym z najważniejszych i najpiękniejszych w naszym życiu...to tutaj podczas rejsu gondolą powiedziała tak.</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="58" viewBox="0 0 13 58" fill="none">
          <path d="M7.5 1.97998C7.5 1.4277 7.05228 0.97998 6.5 0.97998C5.94772 0.97998 5.5 1.4277 5.5 1.97998H7.5ZM6.5 57.7535L12.2735 51.98L6.5 46.2065L0.726497 51.98L6.5 57.7535ZM5.5 1.97998L5.5 51.98H7.5L7.5 1.97998H5.5Z" fill="#CC93A4" />
        </svg>
        <h4>12.07.2024 roku</h4>
        <p>Ten dzień będzie kolejnym najważniejszym więc dołożymy wszelkich starań abyście także i wy zapamiętali go jak najdłużej. Z góry dziękujemy wszystkim którzy zechcą go z nami dzielić. Bawcie się dobrze !!!</p>
      </div>
    </div>
  );
}

export default OurStory;
