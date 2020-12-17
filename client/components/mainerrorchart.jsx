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
    <div id="mainchart">
      <div>
        <Line data={props.data} options={props.options} />
      </div>
      <div>&nbsp;</div>
      <div id="log">
        <b>405</b> Method not allowed<br></br>
        406 Not acceptable<br></br>
        406 Not acceptable<br></br>
        407 Proxy authentication required<br></br>
        405 Method not allowed<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        406 Not acceptable<br></br>
        407 Proxy authentication required<br></br>
        405 Method not allowed<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
        406 Not acceptable<br></br>
        405 Method not allowed<br></br>
      </div>
    </div>
  );
};

export default MainChart;
