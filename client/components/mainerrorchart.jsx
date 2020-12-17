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
				<br></br>
				<br></br>
				404: Not Found <br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				405: Method Not Allowed <br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				406: Not Acceptable <br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				407: Proxy Authentication Required <br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		</div>
	);
};

export default MainChart;
