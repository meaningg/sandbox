import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header({ title }) {
  return (
    <header className="noselect">
      <Link to="/">{title}</Link>
      <span>mean.ing</span>
    </header>
  );
}

export default Header;
