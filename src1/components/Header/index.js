import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <User />
    </div>
  );
}

export default Header;