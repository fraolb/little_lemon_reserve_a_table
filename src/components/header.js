import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../images/Logo .svg";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} />
        </li>
        <li className="hideSmall">
          <Link to="/">Homepage</Link>
        </li>
        <li className="hideSmall">
          <Link to="/">About Us</Link>
        </li>
        <li className="hideSmall">
          <Link to="/">Menu</Link>
        </li>
        <li className="hideSmall">
          <Link to="/reserveTable">Reservations</Link>
        </li>
        <li className="hideSmall">
          <Link to="/">Order Online</Link>
        </li>
        <li className="hideSmall">
          <Link to="/">Login</Link>
        </li>
      </ul>
      <span className="navBtn" onClick={() => setOpen(true)}>
        &#9776;
      </span>
      {open && (
        <div id="myNav" className="overlay">
          <a className="closebtn" onClick={() => setOpen(false)}>
            &times;
          </a>

          <div className="overlay-content">
            <Link to="/">Homepage</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Menu</Link>
            <Link to="/reserveTable">Reservations</Link>
            <Link to="/">Order Online</Link>
            <Link to="/">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
