import React from "react";

import Card from "./components/card.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container cards">
        <h1 className="cards__title">Ты сегодня покормил кота?</h1>
        <ul className="cards__list">
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </div>
  );
}

export default App;
