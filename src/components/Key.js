import React from "react";
import PropTypes from "prop-types";

const Key = (props) => {
  return (
    <kbd className="p-2 flex flex-col text-primary bg-gray-200 shadow-sm border rounded-lg uppercase justify-between mr-4">
      <span className="font-lg"> {props.symbol || " "} </span>
      <span className="font-md">{props.name}</span>
    </kbd>
  );
};

Key.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string,
};

export default Key;
