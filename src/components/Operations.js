import React from "react";
import Button from "./Button";

const Account = props => {
  return (
    <ul className="operations">
      <li>{props.date}</li>
      <li>{props.description}</li>
      <li>{props.amount}</li>
    </ul>
  );
};

export default Account;
