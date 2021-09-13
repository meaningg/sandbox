import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <header className="noselect">
      <Link to="/">Dashboard</Link>
      <span>mean.ing</span>
    </header>
  );
}

export default Header;
