import React from "react";
import UserIcon from "./UserIcon";

const User = props => {
  return (
    <>
      <div className="name">{props.username}</div>
      <div className="user">
        <UserIcon />
      </div>
    </>
  );
};

export default User;
