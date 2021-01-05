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
            borderColor: 'rgb(189,211,88)', 
            borderCapStyle: 'square',
            borderDash: [], 
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [],
            spanGaps: true,
          },
          {
            label: '405',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgb(255,255,255)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
          },
          {
            label: '406',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgb(27,176,117)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
          },
          {
            label: '407',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgb(153,151,153)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'white',
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'brown',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
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
      
      // store the current datasets array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread current datasets into new array
      const updatedDataSets = [...currDataSets];

      // the time stamp ("WINDOW_START") of the incoming message is already included in the chartData labels,
      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        // and the incoming COUNT is larger or equal to the last element in the data array,
        && message.COUNT >= updatedDataSets[0].data[updatedDataSets[0].data.length -1]) {
          // also if the ticks on the x axis (labels) are more than 10, remove the first element(time) in the labels array
          if (this.state.chartData.labels.length > 10) {
            this.state.chartData.labels.shift()
          }
          // pop the last element(count) off the data array 
          updatedDataSets[0].data.pop()
          // pop the last element(time) off the labels array
          this.state.chartData.labels.pop()
          // push the latest count from the incoming message
          updatedDataSets[0].data.push(message.COUNT);

          // variable for storing updated version of state 
          const newChartData = {
            ...this.state.chartData, 
            datasets: [...updatedDataSets], 
            labels: this.state.chartData.labels.concat(
              // concat the new time from WINDOW_START in the incoming message
              message["WINDOW_START"]
            ),
        };
       
        // set the state of chartData to updated version 
        this.setState({ chartData: newChartData });
        
        // else the window has ended and a new window starts giving us a new time stamp(a new WINDOW_START time)
      } else {
        // check to see if the labels are currently greater than 10
        if (this.state.chartData.labels.length > 10) {
          // if true, shift the earliest label(time)
          this.state.chartData.labels.shift()
        }
        
      // push incoming count to data array at index 0
      updatedDataSets[0].data.push(message.COUNT);
      

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, 
        datasets: [...updatedDataSets], 
        labels: this.state.chartData.labels.concat(
          // new Date().toLocaleTimeString()
          message["WINDOW_START"]
        ),
      };
      
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      }
    });

    // Connects 405 Error Consumer
    socket.on("405_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread currDataSets array into new array
      const updatedDataSets = [...currDataSets];

      // the time stamp ("WINDOW_START") of the incoming message is already included in the chartData labels,
      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        // and the incoming COUNT is larger or equal to the last element in the data array,
        && message.COUNT >= updatedDataSets[1].data[updatedDataSets[1].data.length -1]) {
          // pop the last element(count) off the data array
          updatedDataSets[1].data.pop()
          // pop the last element(time) off the labels array
          this.state.chartData.labels.pop()
          // push the latest count from the incoming message
          updatedDataSets[1].data.push(message.COUNT);
          
          // variable for storing updated version of state
          const newChartData = {
            ...this.state.chartData, 
            datasets: [...updatedDataSets], 
        };
       
        // set the state with the updated variable
        this.setState({ chartData: newChartData });
        
      } else {
        
      // push incoming count to data array at index 1 
      updatedDataSets[1].data.push(message.COUNT);

      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, // object
        datasets: [...updatedDataSets], // array
      };
      
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      } 
    });

    // Connects 406 Error Consumer
    socket.on("406_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread currDataSets array into new array
      const updatedDataSets = [...currDataSets];
      
      // the time stamp ("WINDOW_START") of the incoming message is already included in the chartData labels,
      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        // and the incoming COUNT is larger or equal to the last element in the data array,
        && message.COUNT >= updatedDataSets[2].data[updatedDataSets[2].data.length -1]) {
          // pop the last element(count) off the data array 
          updatedDataSets[2].data.pop()
          // pop the last element(time) off the labels array
          this.state.chartData.labels.pop()
          // push the latest count from the incoming message
          updatedDataSets[2].data.push(message.COUNT);
          console.log(updatedDataSets[2].data)
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets],
        };
      
        // set the state with the updated variable
        this.setState({ chartData: newChartData });
      
        // else the window has ended and a new window starts giving us a new time stamp(a new WINDOW_START time)
      } else {
        
      // push incoming count to data array at index 2
      updatedDataSets[2].data.push(message.COUNT);
      
      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, 
        datasets: [...updatedDataSets], 
      };
      
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
      }
    });

    // Connects 407 Error Consumer
    socket.on("407_ERRORS_PER_MIN", data => {
      // parse incoming data
      const message = JSON.parse(data);
      
      // store the current datasets array in a variable
      const currDataSets = this.state.chartData.datasets;

      // create a new data variable, spread currDataSets array into new array
      const updatedDataSets = [...currDataSets];
      
      // the time stamp ("WINDOW_START") of the incoming message is already included in the chartData labels,
      if (this.state.chartData.labels.includes(message["WINDOW_START"]) 
        // and the incoming COUNT is larger or equal to the last element in the data array,
        && message.COUNT >= updatedDataSets[3].data[updatedDataSets[3].data.length -1]) {
          // pop the last element(count) off the data array
          updatedDataSets[3].data.pop()
          // pop the last element(time) off the labels array
          this.state.chartData.labels.pop()
          // push the latest count from the incoming message
          updatedDataSets[3].data.push(message.COUNT);
      
          const newChartData = {
            ...this.state.chartData, // object
            datasets: [...updatedDataSets], // array
        };
       
        // set the state with the updated variable
        this.setState({ chartData: newChartData });
      
      // else the window has ended and a new window starts giving us a new time stamp(a new WINDOW_START time)
      } else {
        
      // push incoming count to data array at index 3
      updatedDataSets[3].data.push(message.COUNT);
      
      // variable for storing updated version of state
      const newChartData = {
        ...this.state.chartData, 
        datasets: [...updatedDataSets], 
      };
      
      // set the state with the updated variable
      this.setState({ chartData: newChartData });
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
      </div>
    );
  }
}

// class Chart extends Component {}
export default LineChart;