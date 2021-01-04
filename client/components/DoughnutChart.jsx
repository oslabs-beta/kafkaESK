import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../styles/mainchart.scss';

// doughnut data array corresponds to single total for each label
// need to determine how to continually update array with 4 aggregate values
class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['404', '405', '406', '407'],
      datasets: [
        {
          label: 'Errors',
          backgroundColor: ['#BDD358', '#FFFFFF', '#1BB075', '#999799'],
          borderColor: 'transparent',
          data: [0, 0, 0, 0],
        },
      ],
    };
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');
    // Connects 404 Error Consumer
    socket.on('404_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const dataArray = this.state.datasets[0].data;

      // create a new data variable, spread current array into new array
      const updatedArray = [...dataArray];

      // push incoming data to new data variable
      //   console.log("these are updated datasets", updatedDataSets);
      //   updatedDataSets[0].data.splice(0, 1, message.ERROR_404_COUNT);
      //   console.log("spliced array:", updatedDataSets.data);
      updatedArray[0] = message.COUNT;
      console.log('doughtnut data num:', updatedArray[0]);

      // set the state with the updated variable
      //   this.setState({ datasets: updatedDataSets });
      //   console.log("state", this.state);
    });

    // Connects 405 Error Consumer
    socket.on('405_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[0].data.splice(1, 1, message.COUNT);

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 406 Error Consumer
    socket.on('406_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[0].data.splice(2, 1, message.COUNT);

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 407 Error Consumer
    socket.on('407_ERRORS_PER_MIN', (data) => {
      const message = JSON.parse(data);
      const currDataSets = this.state.datasets;
      // console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[0].data.splice(3, 1, message.COUNT);

      this.setState({ datasets: updatedDataSets });
    });
  }

  render() {
    return <Doughnut data={this.state} />;
  }
}
export default DoughnutChart;