import React from "react";

import Card from "../card-item/card-item.component";

import "./card-list.styles.scss";

const CardList = ({ items, toggleSelect }) => {
  return (
    <ul className="cards__list">
      {items.map((item) => (
        <Card key={item.id} {...item} toggleSelect={toggleSelect} />
      ))}
    </ul>
  );
};

export default CardList;
