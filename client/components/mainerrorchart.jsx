import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/mainchart.scss";

const MainChart = (props) => {
  return (
    <div id="mainchart">
      <div>
        <Line data={props.data} options={props.options} />
      </div>
      <div>Hello!!!!</div>
    </div>
  );
};

export default MainChart;
