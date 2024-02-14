import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import KissImage from "../Assets/kiss.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const removeResponsiveNavClass = () => {
    navRef.current.classList.remove("responsive-nav");
  };

  return (
    <>
      <header>
        <nav ref={navRef}>
          <a href="#Ceremony" onClick={removeResponsiveNavClass}>
            Ceremonia
          </a>
          <a href="#CountDown" onClick={removeResponsiveNavClass}>
            Odliczanie do wesela
          </a>
          <a href="#Ceremony" onClick={removeResponsiveNavClass}>
            Plan wesela
          </a>
          <p className="title">
            Kamila & Łukasz<br></br>
            12.07.2024
          </p>
          <a href="#Ceremony" onClick={removeResponsiveNavClass}>
            {" "}
            Sprawy organizacyjne
          </a>
          <a href="#Ceremony" onClick={removeResponsiveNavClass}>
            Historia
          </a>
          <a href="#Ceremony" onClick={removeResponsiveNavClass}>
            Kontakt
          </a>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars className="custom-icon"></FaBars>
        </button>
      </header>
      <section className="say-Yes">
        <div className="pink-Rectangle">
          <p>Powiedziała tak...</p>
        </div>
        <div className="kiss-Img">
          <img src={KissImage} alt="Kiss in gondola" />
        </div>
      </section>
    </>
  );
}

export default Navbar;
