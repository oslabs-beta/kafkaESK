import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import MainChart from "./components/mainerrorchart.jsx";
import AirtableIntegration from "./components/airtable.jsx";
import SubCharts from "./components/subcharts.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      allFilteredData: [],
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          ]
        }
      },
      chartData: {
        labels: [],
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
            data: [],
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
            data: [],
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
            data: [],
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
            data: [],
            spanGaps: false,
          },
        ]
      },
    };
  }

  componentDidMount() {
    const socket = io.connect("http://localhost:3333");
    // Connects 404 Error Consumer
    socket.on("404_ERRORS_PER_MIN", data => {
      const testData = document.getElementById("404");
      testData.innerText = testData.innerHTML + data;
  
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[0].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        labels: this.state.chartData.labels.concat(
          new Date().toLocaleTimeString()
        ),
      };
      console.log(newChartData);
      // set the state with the updated variable
      
      this.setState({ chartData: newChartData });
      console.log(this.state);

    });

    // Connects 405 Error Consumer
    socket.on("405_ERRORS_PER_MIN", data => {
      const testData = document.getElementById("405");
      testData.innerText = testData.innerHTML + data;
      
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[1].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   new Date().toLocaleTimeString()
        // ),
      };
      // console.log(newChartData);

      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      // console.log(this.state);
      
    });

    // Connects 406 Error Consumer
    socket.on("406_ERRORS_PER_MIN", data => {
      const testData = document.getElementById("406");
      testData.innerText = testData.innerHTML + data;
      
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;
      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];
      // push incoming data to new data variable
      updatedDataSets[2].data.push(message.COUNT);
      // console.log(currDataSets);
      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   new Date().toLocaleTimeString()
        // ),
      };
      console.log(newChartData);
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      console.log(this.state);
    });

    // Connects 407 Error Consumer
    socket.on("407_ERRORS_PER_MIN", data => {
      const testData = document.getElementById("407");
      testData.innerText = testData.innerHTML + data;
      
      
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;
      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];
      // push incoming data to new data variable
      updatedDataSets[3].data.push(message.COUNT);
      // console.log(currDataSets);
      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   new Date().toLocaleTimeString()
        // ),
      };
      console.log(newChartData);
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      console.log(this.state);
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
        <div id="container">
          <SubCharts />
        </div>
        <div id="container">
          <AirtableIntegration />
        </div>
      </div>
    );
  }
}
export default App;
