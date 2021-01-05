/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Polar } from 'react-chartjs-2';
import '../styles/mainchart.scss';

class PolarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['404', '405', '406', '407'],
        datasets: [
          {
            label: '404',
            fill: true,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            data: [undefined, undefined, undefined, undefined],
          },
        ],
      },
      // eslint-disable-next-line react/no-unused-state
      options: {
        title: {
          display: true,
          text: '',
        },
      },
    };
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');

    // Connects 404 Error Consumer
    // socket.on('404_ERRORS_PER_MIN', function (data, callback) {

    // // store the current state array in a variable
    // const currDataSets = this.state.data.datasets;
    // console.log(currDataSets);

    // // create a new data variable, spread current array into new array
    // const updatedDataSets = [...currDataSets];

    // // push incoming data to new data variable
    // updatedDataSets[0].data.push(67);
    // console.log(updatedDataSets[0].data);

    // // variable for storing updated version of state
    // const newChartData = {
    //   // eslint-disable-next-line react/no-access-state-in-setstate
    //   ...this.state.data,
    //   datasets: [...updatedDataSets],
    //   // labels: []
    // };
    // console.log(newChartData);

    // set the state with the updated variable
    // this.setState({ data: newChartData });
    // console.log('state', this.state);

    // Connects 404 Error Consumer
    socket.on("404_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.data.datasets; // array

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[0] = message.COUNT; 

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state.data, 
            datasets: updatedDataSets[0][data][0], 
        };

      // set the state of chartData to updated version 
      this.setState({ data: newChartData });
      console.log(this.state)
      });

    // Connects 405 Error Consumer
    socket.on('405_ERRORS_PER_MIN', data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.data.datasets;

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[1] = message.COUNT;

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state.data, 
            datasets: updatedDataSets[0][data][1], 
        };

      // set the state of chartData to updated version 
      this.setState({ data: newChartData });
      console.log(this.state)
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.data.datasets;

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[2] = message.COUNT;

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state.data, 
            datasets: updatedDataSets[0][data][2], 
        };

      // set the state of chartData to updated version 
      this.setState({ data: newChartData });
      console.log(this.state)
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.data.datasets;

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      updatedDataSets[0].data[3] = message.COUNT;

          // variable for storing updated version of state 
      const newChartData = {
            ...this.state.data, 
            datasets: updatedDataSets[0][data][3], 
        };

      // set the state of chartData to updated version 
      this.setState({ data: newChartData });
      console.log(this.state)
    });
  }

  render() {
    return <Polar data={this.state.data} />;
  }
}

export default PolarChart;