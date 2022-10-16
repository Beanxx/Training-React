import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // dataPointValues = 12개의 값이 있는 배열
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // 객체 -> 숫자로 변환
  const totalMaximum = Math.max(...dataPointValues); // 스프레드 연산자로 배열의 모든 요소를 가져와서 독립적인 인자로 받음

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
