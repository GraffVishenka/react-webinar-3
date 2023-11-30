import React from "react";
import PropTypes from "prop-types";

import Controls from "../controls";

import "./style.css";

function Head({ title, setModalActive }) {

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <div className={title === "Корзина" ? "Basket-head" : "Head"}>
      <h1>{title}</h1>
      {title === "Корзина" && <Controls title="Закрыть" propsFunc={closeModal} />}
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  setModalActive: PropTypes.func,
};

Head.defaultProps = {
  setModalActive: () => {},
};

export default React.memo(Head);