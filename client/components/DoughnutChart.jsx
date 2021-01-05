import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';
import '../styles/mainchart.scss';

// doughnut data array corresponds to single total for each label
class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    // state holds labels for each error type and single data point for each current count(datasets:[{data:[]}]) 
    this.state = {
      labels: ['404', '405', '406', '407'],
      datasets: [
        {
          label: 'Errors',
          backgroundColor: ['#BDD358', '#FFFFFF', '#1BB075', '#999799'],
          borderColor: 'transparent',
          data: [undefined, undefined, undefined, undefined],
        },
      ],
    };
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');
    // Connects 404 Error Consumer
    socket.on('404_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.datasets; // array

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[0] = message.COUNT; 

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state, 
            datasets: updatedDataSets[0][data][0], 
        };
      
      // set the state of chartData to updated version 
      this.setState({ datasets: newChartData });
    })
      // Connects 404 Error Consumer
    socket.on('405_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.datasets; // array

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[1] = message.COUNT; 

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state, 
            datasets: updatedDataSets[0][data][1], 
        };

      // set the state of chartData to updated version 
      this.setState({ datasets: newChartData });
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.datasets; // array

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[2] = message.COUNT; 

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state, 
            datasets: updatedDataSets[0][data][2], 
        };

      // set the state of chartData to updated version 
      this.setState({ datasets: newChartData });
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.datasets; // array

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[3] = message.COUNT; 

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state, 
            datasets: updatedDataSets[0][data][3], 
        };

      // set the state of chartData to updated version 
      this.setState({ datasets: newChartData });
    });
  }

  render() {
    return <Doughnut data={this.state} />;
  }
}
export default DoughnutChart;
