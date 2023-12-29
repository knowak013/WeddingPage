import React, { useEffect, useState } from "react";
import { getBasicHeroInfoByID } from "./requests";
import "./App.css";
import Nav from "./Components/Nav/Nav";

const featuredHerosIds = [10, 502, 505];

function App() {
  useEffect(() => {
    fetchAndRenderFeaturedHeros();
  }, []);

  const [featuredHerosList, setFeaturedHerosList] = useState([]);

  const fetchAndRenderFeaturedHeros = async () => {
    let heros = [];
    for (const heroId of featuredHerosIds) {
      const hero = await getBasicHeroInfoByID(heroId);
      heros.push(hero);
    }

    setFeaturedHerosList(heros);
  };

  return (
    <>
      <Nav></Nav>
      <main>
        <section className="featured">
          {featuredHerosList.map(({ name, imgUrl, powerstats }) => (
            <div className="featured_hero">
              <h2>{name}</h2>
              <img src={imgUrl} alt={`${name}`} />
              <div className="featured__hero__stats">
                <div>
                  <p>{powerstats.combat}</p>
                </div>
                <div>
                  <p>{powerstats.durability}</p>
                </div>
                <div>
                  <p>{powerstats.inteligence}</p>
                </div>
                <div>
                  <p>{powerstats.speed}</p>
                </div>
                <div>
                  <p>{powerstats.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
