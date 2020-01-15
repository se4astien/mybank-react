import React from "react";
import Button from "./Button";

const Account = props => {
  return (
    <ul className="dashboard" style={{ backgroundColor: props.color }}>
      <li>{props.name}</li>
      <li>{props.balance} €</li>
    </ul>
  );
};

export default Account;
