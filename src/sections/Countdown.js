import React, { useState, useEffect } from "react";
import "../Styles/Countdown.css";

function CountDown() {
  const weddingDate = new Date("2024-07-12T15:30:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      return { days, hours, minutes };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="container-count-down">
      <h2>Odliczanie do wesela</h2>
      <div className="count-down">
        <div className="pink-block">
          <p>
            {timeLeft.days}
            <br></br>dni
          </p>
        </div>
        <div className="pink-line"></div>
        <div className="pink-block">
          <p>
            {timeLeft.hours}
            <br></br> godzin
          </p>
        </div>
        <div className="pink-line"></div>
        <div className="pink-block">
          <p>
            {timeLeft.minutes} <br></br>minut
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
