import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav />
      // <div>
      //   <p>Hello World</p>
      // </div>
    );
  }
}
export default App;
