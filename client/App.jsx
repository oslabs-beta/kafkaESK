import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import MainChart from "./components/mainerrorchart.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="container">
          <Nav />
        </div>
        <div id="container">
          <MainChart />
        </div>
      </div>
    );
  }
}
export default App;
