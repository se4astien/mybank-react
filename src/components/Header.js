import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="top">
          <Logo />
          <User username={"Sébastien"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
