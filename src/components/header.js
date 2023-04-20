import React, { useState } from "react";
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
          <a href="/home">Homepage</a>
        </li>
        <li className="hideSmall">
          <a href="/about">About Us</a>
        </li>
        <li className="hideSmall">
          <a href="/blog">Menu</a>
        </li>
        <li className="hideSmall">
          <a href="/blog">Reservations</a>
        </li>
        <li className="hideSmall">
          <a href="/blog">Order Online</a>
        </li>
        <li className="hideSmall">
          <a href="/blog">Login</a>
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
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
