import React, { useState } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.scss";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      taste: "с фуа-гра",
      quantity: "10 порций",
      weight: "0,5",
      gift: "мышь в подарок",
      selected: false,
      selectedText: "Печень утки разварная с артишоками.",
      disabled: false,
      disabledText: "Печалька, с фуа-гра закончился.",
    },
    {
      id: 2,
      taste: "с рыбой",
      quantity: "40 порций",
      weight: "2",
      gift: "2 мыши в подарок",
      selected: false,
      selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      disabled: false,
      disabledText: "Печалька, с рыбой закончился.  ",
    },
    {
      id: 3,
      taste: "с курой",
      quantity: "100 порций",
      weight: "5",
      gift: "5 мышей в подарок",
      selected: false,
      selectedText: "Филе из цыплят с трюфелями в бульоне.",
      disabled: true,
      disabledText: "Печалька, с курой закончился.",
    },
  ]);

  const toggleSelect = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.selected = !item.selected;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="container cards">
        <h1 className="cards__title">Ты сегодня покормил кота?</h1>
        <CardList items={items} toggleSelect={toggleSelect} />
      </div>
    </div>
  );
}

export default App;
