/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/mainchart.scss";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      datasets: [
        {
          label: "404",
          backgroundColor: "rgb(189,211,88)",
          data: [],
        },
        {
          label: "405",
          backgroundColor: "rgb(255,255,255)",
          data: [],
        },
        {
          label: "406",
          backgroundColor: "rgb(27,176,117)",
          data: [],
        },
        {
          label: "407",
          backgroundColor: "rgb(153,151,153)",
          data: [],
        },
      ],
    };
  }

  componentDidMount() {
    const socket = io.connect("http://localhost:3333");

    // Connects 404 Error Consumer
    socket.on("404_ERRORS", (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const currDataSets = this.state.datasets;
      console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[0].data = [message.ERROR_404_COUNT];
      console.log("Bar Chart", updatedDataSets[0].data);

      // variable for storing updated version of state
      // const newChartData = {
      //   // eslint-disable-next-line react/no-access-state-in-setstate
      //   ...this.state.datasets,
      //   datasets: [...updatedDataSets],
      // };

      // console.log(newChartData);
      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
      //  console.log("state", this.state);
    });

    // Connects 405 Error Consumer
    socket.on("405_ERRORS", (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const currDataSets = this.state.datasets;
      //  console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[1].data = [message.ERROR_405_COUNT];
      //   console.log(updatedDataSets[0].data);
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 406 Error Consumer
    socket.on("406_ERRORS", (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const currDataSets = this.state.datasets;
      //   console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[2].data = [message.ERROR_406_COUNT];
      //   console.log(updatedDataSets[0].data);

      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });

    // Connects 407 Error Consumer
    socket.on("407_ERRORS", (data) => {
      const message = JSON.parse(data);
      // store the current state array in a variable
      const currDataSets = this.state.datasets;
      // console.log(currDataSets);

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      // push incoming data to new data variable
      updatedDataSets[3].data = [message.ERROR_407_COUNT];
      // console.log(updatedDataSets[0].data);

      // console.log(newChartData);
      // set the state with the updated variable
      this.setState({ datasets: updatedDataSets });
    });
  }
  render() {
    return <Bar data={this.state} />;
  }
}

export default BarChart;
