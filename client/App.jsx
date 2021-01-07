import React, { Component } from 'react';
import Nav from './components/Nav.jsx';
import LineChart from './components/LineChart.jsx';
import AirtableIntegration from './components/airtable.jsx';
import SubCharts from './components/subcharts.jsx';
import './styles/app.scss';

// eslint-disable-next-line react/prefer-stateless-function
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
