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
      datasets: [{
          label: 'Errors',
           // additional styling for chart.js elements 
          backgroundColor: ['#BDD358', '#FFFFFF', '#1BB075', '#999799'],
          borderColor: 'transparent',          
          data: [0, 0, 0, 0],
         },
        ]
    };
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');
    // Connects 404 Error Consumer
    socket.on('404_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const dataArray = this.state.datasets[0].data;
      // intialize new array and spread current array into new array
      const updatedArray = [...dataArray];
      // assign value of first element of new array to be COUNT attribute of message JSON object 
      updatedArray[0] = message.COUNT;

      
      // are we correctly updating state in this WebSocket client?


    });
    // Connects 405 Error Consumer
    socket.on('405_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // initialize variable for array version of state object 
      const updatedDataSets = [...currDataSets];
      // replace value of data array second element of array to be COUNT attribute of message JSON object 
      updatedDataSets[0].data.splice(1, 1, message.COUNT);
      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // initialize variable for array version of state object 
      const updatedDataSets = [...currDataSets];
     // replace value of data array third element of array to be COUNT attribute of message JSON object 
      updatedDataSets[0].data.splice(2, 1, message.COUNT);
      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // initialize variable for array version of state object 
      const updatedDataSets = [...currDataSets];
     // replace value of data array fourth element of array to be COUNT attribute of message JSON object 
      updatedDataSets[0].data.splice(3, 1, message.COUNT);
       // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });
  }

  render() {
    return <Doughnut data={this.state} />;
  }
}
export default DoughnutChart;