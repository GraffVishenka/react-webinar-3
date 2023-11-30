import React from "react";
import PropTypes from "prop-types";

import "./style.css";

function Controls({ code, title, propsFunc }) {
  const runPropsFunc = () => {
    if (code) {
      propsFunc(code);
    } else {
      propsFunc();
    }
  };

  return (
    <button className="Controls" onClick={runPropsFunc}>
      {title}
    </button>
  );
}

Controls.propTypes = {
  code: PropTypes.number,
  title: PropTypes.string.isRequired,
  propsFunc: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  propsFunc: () => {},
};

export default Controls;
