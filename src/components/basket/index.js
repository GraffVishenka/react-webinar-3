import React from "react";
import PropTypes from "prop-types";

import Head from "../head";
import List from "../list";

import { getTotalPrice } from "../../utils";

import "./style.css";

function Basket({ items, modalActive, setModalActive, deleteItem }) {
  const closeModal = () => {
    setModalActive(false);
  };

  const stop = (e) =>{
    e.stopPropagation();
  }

  const itemsKeys = Object.keys(items);

  const basketItems = itemsKeys.map((key) => {
    return {
      code: items[key][0].code,
      price: items[key].reduce((acc, cur) => acc + cur.price, 0),
      title: items[key][0].title,
      count: items[key].length,
    };
  });

  return (
    <div className={modalActive ? "Active" : "Basket"} onClick={closeModal}>
      <div className="Basket-card" onClick={(e) => stop(e)}>
        <Head title="Корзина" setModalActive={setModalActive} />
        {basketItems.length ? (
          <div>
            <List list={basketItems} currentFunc={deleteItem} />
            <div className="Basket-price">
              <span>Итого </span>
              <span>{getTotalPrice(items)}</span>
            </div>
          </div>
        ) : (
          <h2>В корзине нет товаров</h2>
        )}
      </div>
    </div>
  );
}

Basket.propTypes = {
  items: PropTypes.object.isRequired,
  modalActive: PropTypes.bool,
  setModalActive: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

Basket.defaultProps = {
  setModalActive: () => {},
  deleteItem: () => {},
};

export default Basket;
