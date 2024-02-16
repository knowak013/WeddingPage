import React from "react";
import Navbar from "./Components/Navbar";
import Ceremony from "./sections/Ceremony";
import "./Styles/main.css";
import CountDown from "./sections/Countdown";
import WeddingPlan from "./sections/WeddingPlan";
import OrganizationalMatters from "./sections/OrganizationalMatters";
import OurStory from "./sections/OurStory";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />{" "}
      <div className="wrapper">
        <section id="Ceremony">
          <Ceremony />
        </section>
        <div class="wrapper-bottom-part">
          <section id="CountDown">
            <CountDown></CountDown>
          </section>
          <section id="WeddingPlan">
            <WeddingPlan></WeddingPlan>
          </section>
          <section id="OrganizationalMatters">
            <OrganizationalMatters></OrganizationalMatters>
          </section>
          <section id="OurStory">
            <OurStory></OurStory>
          </section>
          <section id="Contact">
            <Contact></Contact>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
