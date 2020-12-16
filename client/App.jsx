import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import MainChart from "./components/mainerrorchart.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');

      socket.on('anything', function (data, callback) {
        console.log(data);
      }); 
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
