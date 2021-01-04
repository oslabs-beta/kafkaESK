import React from 'react';
import DoughnutChart from './DoughnutChart.jsx';
import BarChart from './BarChart.jsx';
import RadarChart from './RadarChart.jsx';
import '../styles/subcharts.scss';

const SubCharts = (props) => {
  return (
    <div id="subcharts">
      <div id="chart1">
        <DoughnutChart />
      </div>
      <div>&nbsp;</div>
      <div id="chart2">
        <BarChart />
      </div>
      <div>&nbsp;</div>
      <div id="chart3">
        <RadarChart />
      </div>
    </div>
  );
};

export default SubCharts;
