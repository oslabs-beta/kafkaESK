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
