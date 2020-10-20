import React from "react";

import "./card-item.styles.scss";

const Card = ({
  id,
  taste,
  quantity,
  weight,
  gift,
  disabled,
  disabledText,
  selected,
  selectedText,
  toggleSelect,
}) => {
  return (
    <li className="card__container" onClick={() => toggleSelect(id)}>
      <div className="card__item">
        <span>Сказочное заморское яство</span>
        <h2 className="card__item-title">Нямушка</h2>
        <p className="card__item-taste">{taste}</p>
        <span>
          {quantity}
          <br />
          {gift}
        </span>
        <div className="card__item-weight">
          {weight}
          <span>КГ</span>
        </div>
      </div>

      {disabled ? (
        <p className="card__message">{disabledText}</p>
      ) : selected ? (
        <p className="card__message">{selectedText}</p>
      ) : (
        <p className="card__message">
          Чего сидишь? Порадуй котэ, <a href="_">купи.</a>
        </p>
      )}
    </li>
  );
};

export default Card;
