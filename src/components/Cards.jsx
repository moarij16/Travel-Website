import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these awesome locations</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../public/2.jpg"
              text="Explore somewhere in Pakistan"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../../public/3.jpg"
              text="Explore banjosa lake"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="../../public/4.jpg"
              text="Explore Neelum Valley"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
