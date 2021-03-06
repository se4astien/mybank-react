import React from "react";
import Button from "./Button";

const Account = account => {
  return (
    <>
      <ul className="dashboard" style={{ backgroundColor: account.color }}>
        <li>{account.name}</li>
        <li>{account.balance} €</li>
      </ul>
      {account.operations.map(operation => {
        return (
          <ul className="operations">
            <li>{operation.date}</li>
            <li>{operation.description}</li>
            <li>{operation.amount} €</li>
          </ul>
        );
      })}
      <Button label={"See more"}></Button>
    </>
  );
};

export default Account;
