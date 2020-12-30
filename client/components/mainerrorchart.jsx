import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/mainchart.scss";

const MainChart = (props) => {
  return (
    <div id="mainchart">
      <div>
        <Line data={props.data} />
      </div>
      <div>&nbsp;</div>
      <div id="log">
        <div id="404"></div>
        <hr></hr>
        <br></br>
        <div id="405"></div>
        <hr></hr>
        <br></br>
        <div id="406"></div>
        <hr></hr>
        <br></br>
        <div id="407"></div>
      </div>
    </div>
  );
};

export default MainChart;
