import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import MainChart from "./components/mainerrorchart.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allFilteredData: [],
      chartData: {
        labels: ["01.00", "02.00", "03.00", "04.00", "05.00"],
        datasets: [
          {
            label: "404",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "red", // The main line color
            borderCapStyle: "square",
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            // pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [65, 59, 80, 81, 56, 55, 40, , 60, 55, 30, 78],
            spanGaps: true,
          },
          {
            label: "405",
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: "rgb(255, 206, 86)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            // pointBorderColor: "white",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [10, 20, 60, 95, 64, 78, 90, , 70, 40, 70, 89],
            spanGaps: false,
          },
          {
            label: "406",
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgb(54, 162, 235)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            // pointBorderColor: "white",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [14, 23, 40, 35, 24, 78, 50, 30, 20, 10, 19],
            spanGaps: false,
          },
          {
            label: "407",
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(255,99,132,0.6)",
            borderColor: "rgb(255,99,132)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            // pointBorderColor: "white",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [33, 44, 55, 35, 24, 71, 80, 90, 30, 10, 9],
            spanGaps: false,
          },
        ],
      },
    };
  }

  componentDidMount() {
    const socket = io.connect("http://localhost:3333");

    // Connects 404 Error Consumer
    socket.on("404_ERRORS", function (data, callback) {
      const testData = document.getElementById("404");
      testData.innerText = testData.innerHTML + data;
    });

    // Connects 405 Error Consumer
    socket.on("405_ERRORS", function (data, callback) {
      const testData = document.getElementById("405");
      testData.innerText = testData.innerHTML + data;
    });

    // Connects 406 Error Consumer
    socket.on("406_ERRORS", function (data, callback) {
      const testData = document.getElementById("406");
      testData.innerText = testData.innerHTML + data;
      console.log(data);
    });

    // Connects 407 Error Consumer
    socket.on("407_ERRORS", function (data, callback) {
      const testData = document.getElementById("407");
      testData.innerText = testData.innerHTML + data;
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
          <MainChart data={this.state.chartData} />
        </div>
      </div>
    );
  }
}
export default App;
