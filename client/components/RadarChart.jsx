/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Radar } from 'react-chartjs-2';
import '../styles/mainchart.scss';

class RadarChart extends React.Component {
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
            data: [8.77, 55.61, 21.69, 6.62, 6.82],
          },
          {
            label: '405',
            fill: true,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            data: [25.48, 54.16, 7.61, 8.06, 4.45],
          },
          {
            label: '406',
            fill: true,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            data: [27.13, 64.16, 1.61, 100.06, 8.45],
          },
          {
            label: '407',
            fill: true,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            data: [35.48, 94.16, 7.61, 10.06, 63.45],
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

    // store the current state array in a variable
    const currDataSets = this.state.data.datasets;
    console.log(currDataSets);

    // create a new data variable, spread current array into new array
    const updatedDataSets = [...currDataSets];

    // push incoming data to new data variable
    updatedDataSets[0].data.push(67);
    console.log(updatedDataSets[0].data);

    // variable for storing updated version of state
    const newChartData = {
      // eslint-disable-next-line react/no-access-state-in-setstate
      ...this.state.data,
      datasets: [...updatedDataSets],
      // labels: []
    };
    // console.log(newChartData);

    // set the state with the updated variable
    this.setState({ data: newChartData });
    console.log('state', this.state);

    // Connects 405 Error Consumer
    socket.on('405_ERRORS_PER_MIN', function (data, callback) {
      const testData = document.getElementById('405');
      testData.innerText = testData.innerHTML + data;
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', function (data, callback) {
      const testData = document.getElementById('406');
      testData.innerText = testData.innerHTML + data;
      console.log(data);
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', function (data, callback) {
      const testData = document.getElementById('407');
      testData.innerText = testData.innerHTML + data;
      console.log(data);
    });
  }

  render() {
    return <Radar data={this.state.data} />;
  }
}

export default RadarChart;