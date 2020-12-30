import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/mainchart.scss";

const MainChart = (props) => {
  return (
		<div id='mainchart'>
			<div>
				<Line data={props.data} />
			</div>
			<div>&nbsp;</div>
			<div id='log'>
			
			</div>
		</div>
	);
};

export default MainChart;
