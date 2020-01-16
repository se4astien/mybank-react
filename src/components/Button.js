import React from "react";

const Button = props => {
  return (
    <div className="button">
      <button>{props.label}</button>
    </div>
  );
};

export default Button;
