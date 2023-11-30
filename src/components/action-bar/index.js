import React from "react";
import PropTypes from "prop-types";

import Controls from "../controls";

import { getCount, getTotalPrice } from "../../utils";

import "./style.css";

function ActionBar({ title, basket, setModalActive }) {
  const openModal = () => {

    const isEmpty = Object.entries(basket).length === 0;
    if (isEmpty) return alert("Корзина пуста");

    setModalActive(true);
  };

  return (
    <div className="ActionBar">
      {title}
      <span className="ActionBar-info">
        {getCount(basket)} {getTotalPrice(basket)}
      </span>
      <Controls title="Перейти" propsFunc={openModal} />
    </div>
  );
}

ActionBar.propTypes = {
  title: PropTypes.string,
  basket: PropTypes.object,
  setModalActive: PropTypes.func,
};

ActionBar.defaultProps = {
  setModalActive: () => {},
};

export default ActionBar;
