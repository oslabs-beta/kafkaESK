/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/mainchart.scss';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      datasets: [
        {
          label: '404',
          backgroundColor: 'rgb(189,211,88)',
          data: [],
        },
        {
          label: '405',
          backgroundColor: 'rgb(255,255,255)',
          data: [],
        },
        {
          label: '406',
          backgroundColor: 'rgb(27, 176, 117)',
          data: [],
        },
        {
          label: '407',
          backgroundColor: 'rgb(153,151,153)',
          data: [],
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

      // store the current state array in a variable
      const currDataSets = this.state.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming count to data array at index 0
      updatedDataSets[0].data = [message.COUNT];

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 405 Error Consumer
    socket.on('405_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);

      // store the current state array in a variable
      const currDataSets = this.state.datasets;      
      
      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming count to data array at index 1
      updatedDataSets[1].data = [message.COUNT]; 
          
      // set the state with the updated variable      
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current state array in a variable
      const currDataSets = this.state.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[2].data = [message.COUNT];

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', (data) => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current state array in a variable
      const currDataSets = this.state.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[3].data = [message.COUNT];

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });
  }
  render() {
    return <Bar data={this.state} />;
  }
}

export default BarChart;
