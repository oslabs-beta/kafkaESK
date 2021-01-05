import React, { Component } from "react";
import "../styles/nav.scss";
import Logo from "../images/kafkaesk-logo.png";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <img src={Logo} width="130" />
      </div>
      {/* Placeholders for future iterations on Nav*/}{/* Available navigation space for future iteration */}
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </nav>
  );
};


// class Nav extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//       return (
//   <nav>
//   <div>
//     <img src={Logo} width="130" />
//   </div>
//   {/* Available navigation space for future iteration */}
//   <div>&nbsp;</div>
//   <div>&nbsp;</div>
//   <div>&nbsp;</div>
//   <div>&nbsp;</div>
// </nav>
// );
//   }
// }

export default Nav;
