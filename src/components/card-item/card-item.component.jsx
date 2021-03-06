import React, { useState } from "react";

import CatImage from "../../assets/Photo.png";
import PropTypes from "prop-types";

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
  satisfied,
}) => {
  const [hoverSelect, setHoverSelect] = useState(false);

  const toggleHoverSelect = () => {
    if (selected) setHoverSelect(true);
  };

  const selectCard = (id) => {
    toggleSelect(id);
    setHoverSelect(false);
  };

  return (
    <li
      onMouseEnter={() => {
        toggleHoverSelect();
      }}
      className={
        "card__container" +
        (disabled
          ? " card__container_disabled"
          : hoverSelect
          ? " card__container_selected-hover"
          : selected
          ? " card__container_selected"
          : " card__container_active")
      }
    >
      <div className="card__item-wrapper">
        <div
          className="card__item"
          onClick={() => {
            selectCard(id);
          }}
        >
          <span className="card__item-text">Сказочное заморское яство</span>
          <span className="card__item-text_hidden">Котэ не одобряет?</span>
          <h2 className="card__item-title">Нямушка</h2>
          <p className="card__item-taste">{taste}</p>
          <span className="card__item-quantity">
            {quantity}
            <br />
            {gift}
            <br />
            {satisfied ? "заказчик доволен" : ""}
          </span>
          <img className="card__item-image" src={CatImage} alt="кот" />
          <div className="card__item-weight">
            {weight}
            <span>КГ</span>
          </div>
        </div>
      </div>

      {disabled ? (
        <p className="card__message">{disabledText}</p>
      ) : selected ? (
        <p className="card__message">{selectedText}</p>
      ) : (
        <p className="card__message">
          Чего сидишь? Порадуй котэ,{" "}
          <a
            href="_"
            className="card__link"
            onClick={(e) => {
              e.preventDefault();
              toggleSelect(id);
            }}
          >
            купи.
          </a>
        </p>
      )}
    </li>
  );
};

Card.propTypes = {
  taste: PropTypes.string,
  quantity: PropTypes.string,
  weight: PropTypes.string,
  gift: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  satisfied: PropTypes.bool,
  selectedText: PropTypes.string,
  disabledText: PropTypes.string,
};

export default Card;
