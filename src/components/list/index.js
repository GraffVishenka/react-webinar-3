import React from "react";
import PropTypes from "prop-types";

import Item from "../item";

import "./style.css";

function List({ list, currentFunc }) {
  return (
    <div className="List">
      {list.map((item) => (
        <div
          key={item.code}
          className="List-item"
        >
          <Item item={item} currentFunc={currentFunc} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number,
    })
  ),
  currentFunc: PropTypes.func,
};

List.defaultProps = {
  currentFunc: () => {},
};

export default React.memo(List);
