import React from "react";
import PropTypes from "prop-types";

import Controls from "../controls";

import "./style.css";

function Item(props) {
  return (
    <div className={"Item"}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price-count">
        <div className="Item_price">{props.item.price} &#8381;</div>

        {props.item.count && (
          <div className="Item_count">
            <span>{props.item.count} шт</span>
          </div>
        )}

        <div className="Item-actions">
          <Controls
            code={props.item.code}
            title={props.item.count ? "Удалить" : "Добавить"}
            propsFunc={props.currentFunc}
          />
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number,
  }),
  currentFunc: PropTypes.func,
};

Item.defaultProps = {
  currentFunc: () => {},
};

export default React.memo(Item);
