import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/lineChart.scss';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allFilteredData: [],
      // eslint-disable-next-line react/no-unused-state
      chartData: {
        labels: [],
        datasets: [
          {
            label: '404',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(225,0,0,0.4)',
            borderColor: 'rgb(189,211,88)', // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // pointBorderColor: "black",
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [],
            spanGaps: true,
          },
          {
            label: '405',
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(255, 206, 86, 0.6)",
            borderColor: 'rgb(255,255,255)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // pointBorderColor: "white",
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [],
            spanGaps: false,
          },
          {
            label: '406',
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: 'rgb(27,176,117)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // pointBorderColor: "white",
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [],
            spanGaps: false,
          },
          {
            label: '407',
            fill: false,
            lineTension: 0.1,
            // backgroundColor: "rgba(255,99,132,0.6)",
            borderColor: 'rgb(153,151,153)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // pointBorderColor: "white",
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [],
            spanGaps: false,
          },
        ],
      },
    };
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:3333');

    // Connects 404 Error Consumer
    socket.on("404_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        && message.COUNT >= updatedDataSets[0].data[updatedDataSets[0].data.length -1]) {
          if (this.state.chartData.labels.length > 10) {
            this.state.chartData.labels.shift()
          }
          updatedDataSets[0].data.pop()
          this.state.chartData.labels.pop()

          updatedDataSets[0].data.push(message.COUNT);
          console.log(updatedDataSets[0].data)
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets], // array
            labels: this.state.chartData.labels.concat(
              // new Date().toLocaleTimeString()
              message["WINDOW_START"]
            ),
        };
        // console.log(newChartData);
        // set the state with the updated variable
  
        this.setState({ chartData: newChartData });
        // console.log(this.state);
      } else {
        if (this.state.chartData.labels.length > 10) {
          this.state.chartData.labels.shift()
        }
        // push incoming data to new data variable
      updatedDataSets[0].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        labels: this.state.chartData.labels.concat(
          // new Date().toLocaleTimeString()
          message["WINDOW_START"]
        ),
      };
      // console.log(newChartData);
      // set the state with the updated variable

      this.setState({ chartData: newChartData });
      // console.log(this.state);
      }

    });

    // Connects 405 Error Consumer
    socket.on("405_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        && message.COUNT >= updatedDataSets[1].data[updatedDataSets[1].data.length -1]) {
          updatedDataSets[1].data.pop()
          this.state.chartData.labels.pop()

          updatedDataSets[1].data.push(message.COUNT);
          console.log(updatedDataSets[1].data)
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets], // array
            // labels: this.state.chartData.labels.concat(
            //   // new Date().toLocaleTimeString()
            //   message["WINDOW_START"]
            // ),
        };
        // console.log(newChartData);
        // set the state with the updated variable
  
        this.setState({ chartData: newChartData });
        // console.log(this.state);
      } else {
        // push incoming data to new data variable
      updatedDataSets[1].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   // new Date().toLocaleTimeString()
        //   message["WINDOW_START"]
        // ),
      };
      // console.log(newChartData);
      // set the state with the updated variable

      this.setState({ chartData: newChartData });
      // console.log(this.state);
      }

      
    });

    // Connects 406 Error Consumer
    socket.on("406_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        && message.COUNT >= updatedDataSets[2].data[updatedDataSets[2].data.length -1]) {
          updatedDataSets[2].data.pop()
          this.state.chartData.labels.pop()

          updatedDataSets[2].data.push(message.COUNT);
          console.log(updatedDataSets[2].data)
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets], // array
            // labels: this.state.chartData.labels.concat(
            //   // new Date().toLocaleTimeString()
            //   message["WINDOW_START"]
            // ),
        };
        // console.log(newChartData);
        // set the state with the updated variable
  
        this.setState({ chartData: newChartData });
        // console.log(this.state);
      } else {
        // push incoming data to new data variable
      updatedDataSets[2].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   // new Date().toLocaleTimeString()
        //   message["WINDOW_START"]
        // ),
      };
      // console.log(newChartData);
      // set the state with the updated variable

      this.setState({ chartData: newChartData });
      // console.log(this.state);
      }
    });

    // Connects 407 Error Consumer
    socket.on("407_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      // console.log(message.COUNT)
      
      // store the current state array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current array into new array
      const updatedDataSets = [...currDataSets];

      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        && message.COUNT >= updatedDataSets[3].data[updatedDataSets[3].data.length -1]) {
          updatedDataSets[3].data.pop()
          this.state.chartData.labels.pop()

          updatedDataSets[3].data.push(message.COUNT);
          console.log(updatedDataSets[3].data)
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets], // array
            // labels: this.state.chartData.labels.concat(
            //   // new Date().toLocaleTimeString()
            //   message["WINDOW_START"]
            // ),
        };
        // console.log(newChartData);
        // set the state with the updated variable
  
        this.setState({ chartData: newChartData });
        // console.log(this.state);
      } else {
        // push incoming data to new data variable
      updatedDataSets[3].data.push(message.COUNT);
      // console.log(currDataSets);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
        // labels: this.state.chartData.labels.concat(
        //   // new Date().toLocaleTimeString()
        //   message["WINDOW_START"]
        // ),
      };
      // console.log(newChartData);
      // set the state with the updated variable

      this.setState({ chartData: newChartData });
      // console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div id="mainchart">
        <div>
          <Line data={this.state.chartData} />
        </div>
        <div>&nbsp;</div>
        {/* <div id="log"> */}
          {/* <div id="404"></div>
          <hr></hr>
          <br></br>
          <div id="405"></div>
          <hr></hr>
          <br></br>
          <div id="406"></div>
          <hr></hr>
          <br></br>
          <div id="407"></div> */}
        {/* </div> */}
      </div>
    );
  }
}

// class Chart extends Component {}
export default LineChart;
