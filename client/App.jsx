import React, { Component } from "react";
import Nav from "./components/Nav.jsx";
import AirtableIntegration from "./components/airtable.jsx";
import SubCharts from "./components/subcharts.jsx";
import LineChart from "./components/LineChart.jsx";
import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="container">
          <Nav />
        </div>
        <div id="container">
          <LineChart />
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
