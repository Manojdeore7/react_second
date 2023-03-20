import React from "react";
import ChartBar from "./chartBar";
import "./chart.css";

function Chart(props) {
  let data = props.dataPoints.map((dataPoint) => dataPoint.value);

  let max = Math.max(...data);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
}
export default Chart;
