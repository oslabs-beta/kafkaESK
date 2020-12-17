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
    const socket = io.connect("http://localhost:3333");
    
    // listners to log messages with every header the front end is listening for 

		socket.on('anything', function (data, callback) {
			console.log(data);
    });
    
    socket.on('404_count', function (message, callback) {
			console.log(JSON.parse(message));
    }); 
    
    socket.on('405_count', function (message, callback) {
			console.log(JSON.parse(message));
    }); 
    
    socket.on('406_count', function (message, callback) {
			console.log(JSON.parse(message));
    }); 
    
    socket.on('407_count', function (message, callback) {
			console.log(JSON.parse(message));
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
