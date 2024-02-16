import React, { useState, useEffect } from "react";
import "../Styles/WeddingPlan.css";
import ribbon from "../Assets/ribbon.png";

function WeddingPlan() {
  return (
    <div className="Wedding-plan-container">
      <div className="header-with-ribbon">
        <h2>Plan wesela</h2>
        <img className="ribbon ribbon-Wedding-plan" src={ribbon} alt="ribbon"></img>
      </div>

      <div className="Wedding-plan">
        <p>15:30 - ślub</p>
        <p>16:00 - życzenia</p>
        <p>16:30 - obiad</p>
        <p>17:30 - pierwszy taniec i rozpoczęcie zabawy</p>
        <p>18:30 - mini sesja zdjęciowa z Młodą Parą</p>
        <p>19:00 - I kolacja</p>

        <p>21:30 - II kolacja</p>
        <p>23:00 - oczepiny</p>
        <p>00:20 - podziękowania dla rodziców</p>
        <p>01:00 - III kolacja</p>
        <p>04:00 - zakończenie zabawy</p>
      </div>
    </div>
  );
}

export default WeddingPlan;
