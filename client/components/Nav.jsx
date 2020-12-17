import React, { Component } from "react";
import "../styles/nav.scss";
import Logo from "../images/kafkaesk-logo4.png";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <img src={Logo} width="130" />
      </div>
      <div>&nbsp;</div>
      <div>Account</div>
      <div>Alert</div>
      <div>More</div>
    </nav>
  );
};

export default Nav;
